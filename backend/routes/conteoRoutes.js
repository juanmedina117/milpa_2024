import express from "express";
import { formularioConteo } from "../controllers/conteoControllers.js";


const router = express.Router();

router.get('/conteo', (re, res)=>{
    res.json({msg:'Funcionando petición GET'})
});

router.post('/guadadoConteo', formularioConteo);


export default router;