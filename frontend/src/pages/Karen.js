import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import karen2 from '../imagenes/karen2.png';
import '../Estilos/Karen.css';


class Karen extends Component {
    
    render() { 
        return ( 
          <>
          <h1 className="karen">Karen Alexandra Gordon Duque</h1>
       <h3 className="descripcionkaren"> Hola... Soy Rulis y mi rol en este equipo es de programadora, líder.</h3>
 
  <img className="fotokaren"  src= {karen2}/>
    

  </>
         );
    }
}
 
export default Karen;