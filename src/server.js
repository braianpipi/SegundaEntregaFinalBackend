import express from "express";
import productosRoutes from './routes/productosRoutes.js'
import carritoRoutes from './routes/carritoRoutes.js'
const app = express()

app.use(express.json())
app.use('api/productos', productosRoutes)
app.use('api/carrito', carritoRoutes)


// let admin = require("firebase-admin");

// let serviceAccount = require("../segunda-entrega-final-backend-firebase-adminsdk-tlh59-c9fdd5fba3.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


const PORT= 8080
app.listen(PORT, ()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})