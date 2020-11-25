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
}});//fin si
})// fin  query

//guardar un nuevo usuario
router.post('/nuevo',(req,res)=>{
const{documento_id,genero,cargo,fecha_de_nacimiento,contraseña}=req.body;

let alumno =[documento_id,genero,cargo,fecha_de_nacimiento,contraseña];

let nuevoAlumno =`INSERT INTO usuarios(documento_id,genero,cargo,fecha_de_nacimiento,contraseña)
VALUES(?,?,?,?,?)`;
mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
if(err){

   return console.error(err.message);
}else{
   res.json({message:`Registro correcto`})
}
})});
//actualizar los datos de un usuario
router.put('/actualizar/:id',(req,res)=>{
   const {genero,cargo,fecha_de_nacimiento,contraseña}=req.body;
   const {id} =req.params;
   

   mysqlConnection.query(`UPDATE usuarios SET cargo=?,genero=?,fecha_de_nacimiento=?,contraseña=? WHERE documento_id=?`,
   [cargo,genero,fecha_de_nacimiento,contraseña, id],(err,rows,fields)=>{
   if(!err ){//si no hay error
      res.json({message:`Usuario actualizado`})
    
   }else{
      console.log(err);
     
   }
   })});

 //consultar un estudiante por su documento id
      router.get('/consultar/:id',(req,res)=>{
      const {id} =req.params;
      mysqlConnection.query('SELECT * from usuarios where documento_id= ? ',[id],(err,rows,fields)=>{   
      if(!err){
         res.json(rows); 
      }else{
      console.log(err);
      }});
      })// fin

      //eliminar un id
      router.delete('/eliminar/:id',(req,res)=>{
         const {id} =req.params;
         mysqlConnection.query('DELETE  from usuarios where documento_id= ? ',[id],(err,rows,fields)=>{   
         if(!err){
            res.json({message:`Usuario eliminado`})

         }else{
         console.log(err);
         }});
         })// fin
   

          //inicio sesion
                 
          router.get('/login',(req,res)=>{
            const {documento_id, contraseña} =req.params;
            mysqlConnection.query('SELECT * from usuarios WHERE documento_id= ?  AND contraseña=?',[documento_id, contraseña],(err,rows,fields)=>{
            if(!err){
               res.json(rows); 
            }else{
            console.log(err);
            }});  })// fin

module.exports=router;