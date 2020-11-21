import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import '../Estilos/respuesta.css';
import Menuenbarra from '../components/Menuenbarra';
import flecha from '../imagenes/flecha.png';
class respuesta extends Component {
    
    render() { 
        return (
    <>
    <section className="chateo">
   <h1 >Chatear con el Psicólogo</h1> </section>
   <Menuenbarra/>

 
 <p className='responde'> Chatea con nuestro servicio de Psico-Félix aquí</p>

 <h2>Chat del Psicólogo-Félix</h2>
 
 <h3> <Link  className="respondamos" >https://app.jivosite.com/chat/my/11</Link></h3>
<img className="flechita" src={flecha}/>

<footer>
<div class="copyresp">
  
  <i class="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
</div>
</footer>
 </>
  )  ;
         }} export default respuesta;