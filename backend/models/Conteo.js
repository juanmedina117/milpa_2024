import {DataTypes} from "sequelize";
import db from '../config/db.js';

const Conteo = db.define('conteo',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitud: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitud: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING
    }
});

export default Conteo;