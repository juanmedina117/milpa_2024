import express from "express";
import { registrarConteo } from "../controllers/conteoControllers.js";
import { loginSeccion } from "../controllers/seccionController.js";


const router = express.Router();

router.post('/login',loginSeccion);

router.post('/guardadoConteo', registrarConteo);


export default router;