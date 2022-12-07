import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({attributes: ['id_user','nama','uname','id_hak']});
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUserId = async (req, res) => {

  try {
    const user = await Users.findOne({
      where: {
        id_user: req.body.userid,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { nama, uname, pass, confPass } = req.body;
  if (pass !== confPass)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(pass, salt);
  try {
    await Users.create({
      nama: nama,
      uname: uname,
      passw: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        uname: req.body.uname,
      },
    });
    // console.log(user);
    const match = await bcrypt.compare(req.body.pass, user[0].passw);
    if (!match) return res.status(400).json({ msg: "Password salah" });
    const userId = user[0].id_user;
    const nama = user[0].nama;
    const uname = user[0].uname;
    const accessToken = jwt.sign(
      { userId, nama, uname },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "100s",
      }
    );

    const refreshToken = jwt.sign(
      { userId, nama, uname },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id_user: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Akun tidak ditemukan" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id_user;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id_user: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
