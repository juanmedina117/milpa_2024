import express from "express";
import { registrarConteo } from "../controllers/conteoControllers.js";


const router = express.Router();

router.get('/conteo', (re, res)=>{
    res.json({msg:'Funcionando petición GET'})
});

router.post('/guardadoConteo', registrarConteo);


export default router;