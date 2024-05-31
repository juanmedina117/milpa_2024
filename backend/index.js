import express from "express";  
import routerConteo from "./routes/conteoRoutes.js";
import db from "./config/db.js";

// Crea la app

const app = express();

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

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})