import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Universal.css';
import '../Estilos/Bienvenida.css';
import logopsico from '../imagenes/logopsico.jpeg';
import logoproyecto from '../imagenes/logoproyecto.png';

class Bienvenida extends Component {
    
    render() { 
        return (
      <>
     <h1>Bienvenido a Psico-Félix</h1>
      <section className='logoproyecto'><img src={logoproyecto}/></section>
      <section className='logo'><img src={logopsico}/></section>
<Link to= "/siguiente"  className="btn btn-warning btn-lg active" role="button" aria-pressed="true">Siguiente</Link>
                                        </>
      );
      
    }}
    export default Bienvenida;