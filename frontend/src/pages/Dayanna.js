import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import dayanna2 from '../imagenes/dayanna2.png';
import '../Estilos/Dayanna.css';


class Dayanna extends Component {
    
    render() { 
        return ( 
          <>
          <h1 className="daya">Dayanna Patricia Martínez Morelo</h1>
       <h3 className="descripciondaya"> Hola... Yo soy Dayi y mi rol en este equipo es programadora, diseñadora.</h3>
         
  <img  className="fotodaya"  src= {dayanna2}/>
    

  </>
         );
    }
}
 
export default Dayanna;