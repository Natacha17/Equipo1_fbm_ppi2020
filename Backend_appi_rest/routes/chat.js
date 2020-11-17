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
    
    
    })//retorno del chat

module.exports =router;