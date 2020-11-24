import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import santiago2 from '../imagenes/santiago2.png';
import '../Estilos/Santiago.css';
import Menuenbarra from '../components/Menuenbarra';

class Santiago extends Component {
    
    render() { 
        return ( 
          <>
         <h1 className="santi" >Santiago Ríos Quintero </h1>
         <Menuenbarra/> 
       <h3 className="descripcionsanti"> Hola... Soy Santi y mi rol en este equipo es de programador, tester.</h3>

  <img className="fotosanti"  src= {santiago2}/>
    

  </>
         );
    }
}
 
export default Santiago;