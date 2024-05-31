import express from "express";  
import cors from 'cors';

import routerConteo from "./routes/conteoRoutes.js";
import db from "./config/db.js";

// Crea la app
const app = express();


// HAbilitar lectura para datos de formularios
app.use(express.urlencoded({extended: true}));

// Permite enviar datos JSON
app.use(express.json());

// Acceso
app.use(cors())


// Conexion a la base de datos
try {
    await db.authenticate();
    console.log("COnexion a la BD exitosa");

} catch (error) {
    console.log(error);
}

// Routing
app.use('/', routerConteo);

// Definir puerto
const port = 3000;

app.listen(process.env.PORT || port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})