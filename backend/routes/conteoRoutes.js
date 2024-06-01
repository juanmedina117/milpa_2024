import express from "express";
import { registrarConteo } from "../controllers/conteoControllers.js";
import { loginSeccion } from "../controllers/seccionController.js";
import { registrarMovilizador } from "../controllers/movilizadorController.js";


const router = express.Router();

router.post('/login',loginSeccion);

router.post('/guardadoConteo', registrarConteo);

router.post('/guardadoMovilizador', registrarMovilizador);


export default router;