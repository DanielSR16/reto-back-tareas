const mysql = require('mysql2');
const conc = {}
// create the connection to database
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'sistemaTareas',
  database: 'gestiontareas',
  password: 'DANIELsr00'
});

 conexion.connect((err)=>{
    if(err) throw err;
    console.log("conexion a base de datos exitosa");

});


module.exports = conexion;

