import  { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config({path:'.env'});

const { BD_NOMBRE, DB_USUARIO, DB_PASSWORD, DB_HOST } = process.env;
 
const db = new Sequelize('milpa_2024', DB_USUARIO, DB_PASSWORD ?? '', {
    host:DB_HOST,
    port:3306,
    dialect:'mysql',
    define:{
        timestamps: true
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    }
});

export default db;