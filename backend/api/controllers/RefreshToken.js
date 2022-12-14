import Users from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        // console.log(req.headers.cookie);
        const refreshToken = req.cookies.refreshToken;
        // console.log(refreshToken);
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id_user;
            const nama = user[0].nama;
            const uname = user[0].uname;
            const accessToken = jwt.sign({userId, nama, uname}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '100s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}