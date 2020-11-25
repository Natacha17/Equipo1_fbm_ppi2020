const express =require ('express');
const app = express();
const routes = require('./routes/routes');
const usuarios = require('./routes/usuarios'); 
const cors = require('cors');

app.set('port',process.env.PORT || 3001)// 

//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: '*'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))

//middleware
app.use(express.json());
//ajustes
app.use('/api',routes);//peticiones directas,acciones,callback
app.use('/api/usuarios',usuarios);


app.listen(app.get('port'),()=>{
console.log('servidor corriendo en puerto'+app.get('port'));
});