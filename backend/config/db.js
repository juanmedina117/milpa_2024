import  { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config({path:'.env'});

const { BD_NOMBRE, DB_USUARIO, DB_PASSWORD, DB_HOST } = process.env;
 
const db = new Sequelize('contadores', 'abraxam_node', 'TxBZ,tzB}.94', {
    host:'http://abraxasmsdt.com',
    port:3306,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    }
});

export default db;