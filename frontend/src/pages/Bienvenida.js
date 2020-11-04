import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Universal.css';
import '../Estilos/Bienvenida.css';

class Bienvenida extends Component {
    
    render() { 
        return (
      <>
      <h1>Bienvenido a Psico-Félix</h1>
<Link to= "/siguiente"  className="btn btn-warning btn-lg active" role="button" aria-pressed="true">Siguiente</Link>
                                        </>
      );
      
    }}
    export default Bienvenida;