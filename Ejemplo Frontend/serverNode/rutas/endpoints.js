const { Console } = require('console');
const { TIMEOUT } = require('dns');
const express = require('express');
const router = express.Router(); // crea objeto para definir rutas
const fs = require('fs')

const mysqlconnection = require('../database.js');

router.get('/',(req,res)=>{
    res.send("PRACTICAS INICIALES - INTERMEDIAS");
});


//? CREATE

router.post('/insertar',(req,res)=>{
    const {nombre, codigo, creditos } = req.body
    const curso = req.body;

    const sql = "INSERT INTO curso (codigo, nombre, creditos) VALUES ("+codigo+",\""+nombre+"\"," +creditos+");"
    mysqlconnection.query(sql,[codigo,nombre,creditos],function(err, result){
        if(err) throw err;
        console.log("inserción hecha");
    })
    console.log(nombre) // mostrar esto para que vean que si entran los datos
    res.send(curso)
})

//? READ
/*
router.get('/leer',(req,res)=>{
    const {nombre } = req.body
    sql = "SELECT * FROM curso WHERE nombre = \""+nombre+"\";";
    let result = mysqlconnection.query(sql,[nombre], (err, rows,fields)=>{
        if(err) throw err;
     
        res.json(rows);
        
    })
    res.send(result)
});
// .......... ENDPOINT ANTIGUO
*/

router.get('/leer',(req,res)=>{
    //  const {nombre } = req.body
      sql = "SELECT * FROM curso ;";
      let result = mysqlconnection.query(sql, (err, rows)=>{
          if(err) throw err;
       
          res.json(rows);
          
      })
      //res.send(result)
  });
  
// **** 

//? UPDATE

router.put('/actualizar',(req,res)=>{
    const {nombre, nuevo } = req.body
    sql = "UPDATE curso SET creditos="+nuevo+" WHERE nombre = \""+nombre+"\";";
    mysqlconnection.query(sql,[nombre, nuevo], function (err,result){
        if(err) throw err;
        console.log("actualizado")
        res.send("hecho")
    });
});

//? DELETE

router.post('/eliminar',(req,res)=>{
    const {nombre } = req.body
    sql = "DELETE FROM curso WHERE nombre = \""+nombre+"\";";
    mysqlconnection.query(sql,[nombre], function (err,result){
        if(err) throw err;
        console.log("borrado")
        res.send("hecho")
    });
});





// --------------- ENDPOINT PARA UN FILTRO BÁSICO ------------
router.post("/filtro", (req, res)=>{
    const {nombre} = req.body
    // para todo lo que contenga - ejemplo, si se postea Z, devolverá los catedráticos : "ZULMA", "MARTINESZ", "ALVAREZ"
    sql = "Select * from catedratico where catedratico.Nombre Like '%"+nombre+"%'"
    // para cuando se desee encontrar solo los que COMIENCEN con el dato like + nombre + %
    // si se quiere que TERMINEN -> like %nombre
    let result = mysqlconnection.query(sql, (err, rows)=>{
        if(err) throw err;
     
        res.json(rows);
        
    })
});


// ------------------- LOGIN SIMPLE --------------------

router.post('/login', (req,res)=>{
    const {usuario, password} = req.body // Como nota: a la tabla de Usuario le di el campo "usuario" como UQ,
    //lo que significa unique, y evita que la persona posea el mismo nombre de usuario
    console.log(req.body)
    
    sql = "SELECT carnet,usuario from Usuario where usuario = \""+usuario+"\" AND password = \""+password+"\";"
    /**si quisieran usar encriptacion, su insert a la base de datos debe obtener el dato que se envía
     * codigicar este dato ya sea en sha256, md5 etc y guardar esa contraseña en la base de datos
     * aquí se haría lo mismo, solo que en lugar de insert, es select
     */
  
    let result = mysqlconnection.query(sql,[usuario,password],(err,row)=>{
        if (err) throw err;
        res.json(row[0]) // solo necesito mi usuario en front end para confirmar y almacenar
        
    })
    console.log(result)
})

// ! IMPORTANTE
// el module exports ayuda a que la información de 'endpoints' sea accessible a cualquier otra 
//función a la hora de ser importado
module.exports = router;