import { check, validationResult } from "express-validator";

import Seccion from "../models/Seccion.js";


const loginSeccion = async (req, res) => {


    // Validacion
    await check('seccion').notEmpty().run(req);

    let resultado = await validationResult(req);

    if( !resultado.isEmpty() ){
        res.json({
            code:0,
            msg:"EL campo esta vacio"
        })
    }

    // Buscar sección

    const { seccion } = req.body;

    const seccionCasilla = await Seccion.findOne({ where: { seccion }});

    console.log(seccionCasilla);

    if(seccionCasilla){
        res.json(
            {
             code:1,
             msg:"Encontrado",
             seccion:seccionCasilla
            }
         )
    }else{
        res.json(
            {
             code:0,
             msg:"Seccion no encontrada",
             seccion:seccionCasilla
            }
         )
    }



}

export {
    loginSeccion
}