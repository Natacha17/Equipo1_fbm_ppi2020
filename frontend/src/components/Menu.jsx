import React from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Menu.css';
import usuario  from '../imagenes/usuario.png';
import Chat  from '../imagenes/Chat.png';
import quienessomos from '../imagenes/quienessomos.png';
import Másinformación  from '../imagenes/Másinformación.png';
import acerca  from '../imagenes/acerca.png';

const Menu = (props) => {

        return (
    <>

 <container className='conversacion'>
 <img  className="fotochat" src={Chat}/>
 <Link to='/conversacion'> <button  type="button" className="coversa btn-sm btn-outline-primary">Chat</button></Link>         
 </container>

 <container className='acercaD'>
 <img className="fotoacerca" src={acerca}/>
 <Link to='/acerca'> <button  type="button" className="proyecto btn-sm btn-outline-primary">Acerca de</button></Link>         
 </container>

 <section className='quieneSsomos'>
 <img className="fotoquienes" src={quienessomos}/>
 <Link to='/quienesS'> <button  type="button" className="nosotros btn-sm btn-outline-primary">Quienes somos</button></Link>         
 </section>

 <section className='masinformate'>
 <img className="fotomasinformacion" src={Másinformación}/>
 <Link to='/informa'> <button  type="button" className="btns btn-sm btn-outline-primary">Más información</button></Link>         
 </section>
</>
      );
      
    }
    export default Menu;
