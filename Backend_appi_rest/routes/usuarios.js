const express = require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM usuarios',(err,rows,fiels)=>{
        if(!err){
            //haga esto
            res.json(rows);
        }else{
            console.log(err);
        }//fin si
    })//fin query
    
    
    })//retorno de todos los estudiantes

    router.post('/nuevo-registro',(req,res)=>{
        const {documento_id,genero,cargo,fecha_de_nacimiento}=req.body;
        
        let alumno =[documento_id,genero,cargo,fecha_de_nacimiento];
        
        let nuevoAlumno =`INSERT INTO usuarios(documento_id,genero,cargo,fecha_de_nacimiento)
        VALUES(?,?,?,?)`;
        mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:`Registro correcto`})
        }
        })});
        router.post('/estudiante/:id',(req,res)=>{
           const {documento_id,genero,cargo,fecha_de_nacimiento}=req.body;
           const {documento_id} =req.body;
           
           
           mysqlConnection.query(`UPDATE usuarios SET documento_id=?,cargo=?,genero=?,fecha_de_nacimiento=?,`,
      [documento_id,fecha_de_nacimiento,cargo,genero],(err,rows,fields)=>{
           if(!err){
              
              res.json({status:`Datos actualizados`});
           }else{
              console.log(err);
             
           }
           })});
        
           router.get('/estudiante/:documento_id',(req,res)=>{
              const {id} =req.params;
              mysqlConnection.query('SELECT * from usuarios where documento_id= ? ',[documento_id],(err,rows,fields)=>{
              if(!err){
                 res.json(rows); 
              }else{
              console.log(err);
              }});  })// fin

module.exports =router;
