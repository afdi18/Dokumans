import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define('tbl_user',{
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING
    },
    uname: {
        type: DataTypes.STRING
    },
    passw: {
        type: DataTypes.STRING
    },
    id_hak: {
        type: DataTypes.INTEGER
    },
    refresh_token: {
        type: DataTypes.STRING
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

export default Users;