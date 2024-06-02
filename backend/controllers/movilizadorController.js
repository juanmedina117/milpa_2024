import { check, validationResult } from "express-validator";

import Movilizador from '../models/Movilizador.js';



const registrarMovilizador = async (req, res) => {

   try {
        


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
    
           return  res.status(200).send({
                code:1,
                msg:"Registro realizado con exito.",
                conteo
            });
            
        }else{
          return  res.status(500).send({
                code:0,
                msg:"NO se guardo el registro",
                conteo
            });
            
        }
        
    } catch (error) {
        console.log(error);
    }
}

export {
    registrarMovilizador
}
