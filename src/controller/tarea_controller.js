const conexion = require('../DB/DB_conection')
const model =  require('../model/tarea_model')

const controllerTarea = {}


controllerTarea.get_tarea = (req,res) =>{
   
    var data = req.body
    var keys =  Object.keys(data);
 
   if(keys.includes("id_tarea") && keys.includes("id_usuario")){
        model.getTarea(data,function(data_result){
        res.status(201)
        res.send(data_result)
        
    });
   }else{
    res.send("Datos incompletos o erroneos")
   }
   
}

controllerTarea.get_all_tarea = (req,res)=>{
   
    var data = req.body
    var keys = Object.keys(data);

    if(keys.includes("id_usuario")){
        model.getAllTarea(data,function(data_result){
            res.send(data_result)
        })
    }

}

controllerTarea.anadir_tarea = (req,res) =>{
    var data = req.body
    var keys = Object.keys(data)
    if(
    keys.includes("id_usuario") && 
    keys.includes("titulo") && 
    keys.includes("descripcion")&& 
    keys.includes("status") && 
    keys.includes("fecha") ){
        if(check_null(data,keys) == false){
            if(keys.includes("comentario") == false){
                data.comentario = null
            }
            if(keys.includes("responsable") == false){
                data.responsable = null
            }
            if(keys.includes("tags") == false){
                data.tags = null
                
            }
        
            
            model.anadirTarea(data,function(data_result){
                res.send(data_result)
            })
        }else{
            res.send("Revisar JSON existen datos con valores null que son obligatorios");
        }
        

    }else{
        res.send("Faltaron datos para poder registrar la tarea");
    }
  

}

controllerTarea.editar_tarea = (req,res) =>{
    var data_cambio = []
    var nombre_cambio = []
    cambios = {}

    var data = req.body
    var keys = Object.keys(data)
    if(keys.includes("id") &&
    keys.includes("id_usuario") && 
    keys.includes("titulo") && 
    keys.includes("descripcion")&& 
    keys.includes("status") && 
    keys.includes("fecha") ){

        if(check_null(data,keys) == false){

            var data_usuario_tarea ={
                id_tarea: data.id,
                id_usuario: data.id_usuario
            }
    
            model.getTarea(data_usuario_tarea,function(resultado){
                // console.log(resultado)
            
    
                if(keys.includes("comentario") == false){
                    data.comentario = null
                }
                if(keys.includes("responsable") == false){
                    data.responsable = null
                }
                if(keys.includes("tags") == false){
                    data.tags = null
                }
    
                var dateString = resultado[0]["fecha"].toISOString();
                resultado[0].fecha = dateString.substring(0,10)
    
                keys = Object.keys(data)
                
                
                keys.forEach(element => {
                    if(data[element] != resultado[0][element]){
                        nombre_cambio.push(element)
                        data_cambio.push(data[element])
                    }
                });
                cambios.id_tarea = data.id
                cambios.name_cambio = nombre_cambio
                cambios.data_cambio = data_cambio
                
                if(nombre_cambio.length > 0){
                    model.editarTarea(cambios,function(resultado_editar){
                        res.send(resultado_editar)
                    });
                }else{
                  
                    res.send("El objeto enviado es el mismo que el la base de datos")
                }
               
            })
           
        }else{
             res.send("Revisar JSON existen datos con valores null que son obligatorios");
        }
        
    }else{
        res.send("Faltaron datos para poder actualizar la tarea")
    }
    




}
controllerTarea.eliminar_tarea = (req,res) =>{
    
}


function check_null(data,keys){
    var flag = false
    keys.forEach(element => {
        if(data[element] == null){
            flag = true
            if(element == "comentarios" || element == "responsable" || element == "tags" ){
                flag = false
            }
        }
       
        
    });
    return flag;
}











module.exports = controllerTarea;