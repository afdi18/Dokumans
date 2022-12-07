
import Docs from "../models/dokuModel.js";


export const getDataDash = async (req, res) => {
  try {
    const docs = await Docs.findAll();
    res.json(docs);
  } catch (error) {
    console.log(error);
  }
};

export const getDok = async (req, res) => {
  try {
    const docs = await Docs.findAll({attributes:['id_doku','no_doku','judul','keterangan','jenis','kategori','tgl_terbit']});
    // console.log(docs);
    res.json(docs);
  } catch (error) {
    console.log(error);
  }
};

export const insertDok = async (req, res) => {
  const {  nodok, judul, jns, ktgr, ket, pathfile, tglterbit } = req.body;
  const d = new Date();
  console.log(d);
  const iddok =
    d.getFullYear()+
    "" +
    (d.getMonth()+1)+
    "" +
    ((d.getDate()<10)?("0"+d.getDate()):d.getDate())+
    "" +
    ((d.getHours()<10)?("0"+d.getHours()):d.getHours())+
    "" +
    ((d.getMinutes()<10)?("0"+d.getMinutes()):d.getMinutes())+
    "" +
    ((d.getSeconds()<10)?("0"+d.getSeconds()):d.getSeconds())
    ;
//   console.log(iddok);

  try {
    const docs = await Docs.create({
      id_doku: iddok,
      no_doku: nodok,
      judul: judul,
      jenis: jns,
      kategori:ktgr,
      keterangan: ket,
      filepath: pathfile,
      tgl_terbit: tglterbit
    });
    // console.log(docs);
    // res.json(docs);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
