const mysql= require('mysql');
const mysqlConnection= mysql.createConnection({
   
     host:'br6afjbwbg988yvrhdaq-mysql.services.clever-cloud.com',
    user:'uqvuccf50kdu8gyu',
    password:'FATZlFsABZkkIW0kU2dl',
    database:'br6afjbwbg988yvrhdaq', 
    multipleStatements:true
}
);//fin conexión 
mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
return;
    }else{
        console.log('Base de datos conectada')
    }
})

module.exports= mysqlConnection;