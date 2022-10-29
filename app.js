const express = require("express");
const app =  express();
app.use(express.json());
const conexion = require('./DB/DB_conection')


//Tareas ruta
app.get('/',(req,res)=>{
    res.send("Sistema de Gestion de Tareas")
})


app.listen(3000,()=>{
    console.log('Servidor corriendo')
    conexion.firstConec
});