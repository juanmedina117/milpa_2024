import {DataTypes} from "sequelize";
import db from '../config/db.js';

const Conteo = db.define('contadores',{
    numero_conteo: {
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
    }
});

export default Conteo;