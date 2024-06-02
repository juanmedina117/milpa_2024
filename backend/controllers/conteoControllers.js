import { check, validationResult } from "express-validator";

import Conteo from '../models/Conteo.js';



const registrarConteo = async (req, res) => {

    console.log(req.body);

    // Validacion
    await check('numero_conteo').notEmpty().run(req);
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

    const conteo = await Conteo.create(req.body);
    if(conteo){

        res.json({
            code:1,
            msg:"Registro realizado con exito.",
            conteo
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
    registrarConteo
}
