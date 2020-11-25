import React from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Salir.css';
import logopsico from '../imagenes/logopsico.jpeg';

const Salir = (props) => {

        return (
    <>
   
    <h1 className="titulodesalirapp">Psico-Félix</h1>
    <section className='perfildesalir'> <Link to="/regresar" href="#" class="regresar btn-primary btn-lg active" role="button" aria-pressed="true">Perfil</Link></section>

 <section className='regresa'> <Link to="/regresar" href="#" class="regresar btn-primary btn-lg active" role="button" aria-pressed="true">Regresar al menú</Link></section>


 <section className='abandonar'> <Link to="/abandono" href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Abandonar</Link></section>

 <p className="Frasedesalir">Serás capaz de lograr lo que sea si tu entusiasmo no tiene límites</p>

 <img className="loguito" src={logopsico}/>

 <footer>
<div class="copysalir">
  
  <i class="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
</div>
</footer>
</>
      );
      
    }
    export default Salir;