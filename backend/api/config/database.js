// const {buatPool}=require("mysql2");

// const pool = buatPool({
//     host:process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASS,
//     database:process.env.DB_NAME,
//     connectionLimit:10
// });

// module.exports = {
//     HOST:process.env.DB_HOST,
//     USER:process.env.DB_USER,
//     PASSWORD:process.env.DB_PASS,
//     DB:process.env.DB_NAME,
//     dialect:"mysql",
//     pool:{
//         max: 5,
//         min:0,
//         acquire: 30000,
//         idle:10000
//     }
// };

import {Sequelize} from "sequelize";
// const user = process.env.DB_USER;

const db = new Sequelize('dokumans', 'root', '',{
    host: 'localhost',
    dialect:"mysql",
    timezone: '+07:00'
});

export default db;

