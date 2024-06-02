import { check, validationResult } from "express-validator";

import Movilizador from '../models/Movilizador.js';



const registrarMovilizador = async (req, res) => {

    console.log(req.body);

    // Validacion
    await check('nombre').notEmpty().run(req);
    await check('numero_movilizador').notEmpty().run(req);
    await check('seccion').notEmpty().run(req);
    await check('latitud').notEmpty().run(req);
    await check('longitud').notEmpty().run(req);

    let resultado = await validationResult(req);

    if( !resultado.isEmpty() ){
        res.json({
            code:0,
            msg:"EL campo esta vacio"
        })
    }

    const movilizador = await Movilizador.create(req.body);
    if(movilizador){

        res.json({
            code:1,
            msg:"Registro realizado con exito.",
            movilizador
        });
        
    }else{
        res.json({
            code:0,
            msg:"NO se guardo el registro",
            conteo
        });
        
    }
    



}

export {
    registrarMovilizador
}
