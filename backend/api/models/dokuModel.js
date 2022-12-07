import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Docs = db.define('tbl_dokumen',{
    id_doku: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    no_doku: {
        type: DataTypes.STRING
    },
    judul: {
        type: DataTypes.STRING
    },
    revisi: {
        type: DataTypes.INTEGER
    },
    keterangan: {
        type: DataTypes.TEXT
    },
    filepath: {
        type: DataTypes.STRING
    },
    tgl_terbit: {
        type: DataTypes.DATEONLY
    },
    tgl_revisi: {
        type: DataTypes.DATE
    },
    tgl_expired: {
        type: DataTypes.DATE
    },    
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
},{
    freezeTableName:true
});

export default Docs;