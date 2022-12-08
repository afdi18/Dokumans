

import {Sequelize} from "sequelize";
// const user = process.env.DB_USER;

const db = new Sequelize('dokumans', 'root', '',{
    host: 'localhost',
    dialect:"mysql",
    timezone: '+07:00'
});

export default db;

