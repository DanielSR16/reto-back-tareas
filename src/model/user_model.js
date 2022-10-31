const conexion = require('../DB/DB_conection')
const modelTask = {}

function login(data,callback){
    var sql = 'SELECT id_usuario FROM usuario where usuario= ? and contrasenia= ?'
    conexion.query(sql,[data.usuario,data.contrasenia], function(err, results){
          if (err){ 
            throw err;
          }
        return callback(results);
    })
}

modelTask.login = login

module.exports = modelTask