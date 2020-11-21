import React, { Component } from 'react';
import '../Estilos/Menu.css';
import  Menuenbarra from '../components/Menuenbarra';
import  Menu from '../components/Menu';
import { Link }  from 'react-router-dom';
import usuario  from '../imagenes/usuario.png';

class Menú extends Component {
    
    render() { 
        return ( 
          <>
          <h1 className="titulomenu">Menú</h1>
         
<Menuenbarra/>

<section className='usuario'><Link to='/salirapp' id="miboton" href="#"><img alt="Boton"  src={usuario}/></Link>
<ol className="perfil"> <Link to= "/perfil" classNameName="botonamor" href="#">Perfil</Link></ol>
</section>



<Menu/>
<footer>
<div class="copymenu">
  
  <i class="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
</div>
</footer>


  </>
         );
    }
}
 
export default Menú;