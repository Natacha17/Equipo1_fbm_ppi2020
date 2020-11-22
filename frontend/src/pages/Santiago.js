import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import santiago2 from '../imagenes/santiago2.png';
import '../Estilos/Santiago.css';


class Santiago extends Component {
    
    render() { 
        return ( 
          <>
         <h1 className="santi" >Santiago Ríos Quintero </h1> 
       <h3 className="descripcionsanti"> Hola... Soy Osi y mi rol en este equipo es de programador, tester.</h3>

  <img className="fotosanti"  src= {santiago2}/>
    

  </>
         );
    }
}
 
export default Santiago;