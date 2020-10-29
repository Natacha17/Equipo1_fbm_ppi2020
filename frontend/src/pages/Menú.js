import React, { Component } from 'react';
import '../Estilos/Universal.css';
import '../Estilos/Menu.css';
import  Menuenbarra from '../components/Menuenbarra';
import  Menu from '../components/Menu';

class Menú extends Component {
    
    render() { 
        return ( 
          <>
          <h1>Menú</h1>

<Menuenbarra/>

<Menu/>
  </>
         );
    }
}
 
export default Menú;