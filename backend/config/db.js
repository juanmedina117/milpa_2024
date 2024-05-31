import sequelize, { Sequelize } from "sequelize";

dotenv.config();
import dotenv from "dotenv";

const {  BD_NOMBRE, DB_USUARIO, DB_PASSWORD, DB_HOST } = process.env;
 
const db = new Sequelize(BD_NOMBRE, DB_USUARIO, DB_PASSWORD ?? '', {
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
    },
    operatorsAliases:false
});

export default db;