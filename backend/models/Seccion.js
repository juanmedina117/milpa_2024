import {DataTypes} from "sequelize";
import db from '../config/db.js';

const Seccion = db.define('secciones',{
    seccion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    alcaldia:{
        type:DataTypes.STRING,
        allowNull: false
    }
});

export default Seccion;