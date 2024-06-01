import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Movilizador = db.define('movilizadores', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_movilizador: {
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

export default Movilizador;