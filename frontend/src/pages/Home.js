import React from 'react';
import Bienvenida from './Bienvenida';
import Másinformacion from './Másinformacion';
//import '../imagenes/Trastornosdealimentacion.jpg';
//import '../imagenes/Amorpropio.jpeg';
//import Amorpropio from '../imagenes/Amorpropio.jpeg';
import Menú from './Menú';
import SalirdelaApp from './SalirdelaApp';
import Flecha from './Flecha';


function Home () {
  return (
    <>
    <p>Esta es mi página de home </p>
    <p>Bienvenido a psico-félix </p>
  
  
    <Bienvenida/>
   <Másinformacion/>
  <Menú/>
  <SalirdelaApp/>
 <Flecha/>
    </>
  );
}

export default Home;