import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import natacha2 from '../imagenes/natacha2.png';
import '../Estilos/Natacha.css';
import Menuenbarra from '../components/Menuenbarra';

class Natacha extends Component {
    
    render() { 
        return ( 
          <>
          <h1 className="nata">Natacha Yanelis Fornier Rios</h1>
          <Menuenbarra/>
      <h3  className="descripcionnata"> Hola... Yo soy La Chama y mi rol en este equipo es programadora, documentadora.</h3>
         
  <img className="fotonata"  src= {natacha2}/>
    

  </>
         );
    }
}
 
export default Natacha;