const mysql = require('mysql2');
const conc = {}
// create the connection to database
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'sistemaTareas',
  database: 'gestiontareas',
  password: 'DANIELsr00'
});

conc.firstConec =  conexion.connect((err)=>{
    if(err) throw err;
    console.log("conexion a base de datos exitosa");

});


module.exports = conc;

