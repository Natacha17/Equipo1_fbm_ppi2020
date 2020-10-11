import React, { Component } from 'react';
import '../Estilos/Bienvenida.css';
import { Link }  from 'react-router-dom';


class Bienvenida extends Component {
    
    render() { 
        return (
      <>
      <h1>Bienvenido a Psico-Félix</h1>

<Link to= "/siguiente"  className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Siguiente</Link>
</>
      );
      
    }}
    export default Bienvenida;