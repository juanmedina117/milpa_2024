import { check, validationResult } from "express-validator";

import Conteo from '../models/Conteo.js';

const registrarConteo = async (req, res) => {

    // Validacion
    await check('nombre').notEmpty().run(req);

    let resultado = await validationResult(req);

    res.json(resultado.array());


    // Crea un registro
    const conteo = await Conteo.create(req.body);
    res.json(conteo);

}

export {
    registrarConteo
}