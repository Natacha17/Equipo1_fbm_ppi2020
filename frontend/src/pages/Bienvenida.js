import React, { Component } from 'react';
import '../Estilos/Bienvenido.css';
import { Link }  from 'react-router-dom';


class Bienvenida extends Component {
    
    render() { 
        return (

<Link to= "/siguiente"  className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Siguiente</Link>

      );
      
    }}
    export default Bienvenida;