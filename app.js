const express = require("express");
var bodyParser = require('body-parser')
const app =  express();
app.use(express.json());
app.use(bodyParser.json())


//Tareas ruta
const tareas = require('./src/routes/tarea_router')
app.use('/tarea',tareas)


app.get('/',(req,res)=>{
    res.send("Sistema de Gestion de Tareas")
})



app.listen(3000,()=>{
    console.log('Servidor corriendo')
    
});