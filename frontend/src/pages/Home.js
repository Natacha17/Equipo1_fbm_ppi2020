import React from 'react';
import Bienvenida from './Bienvenida';
import Másinformacion from './Másinformacion';
//import '../imagenes/Trastornosdealimentacion.jpg';
//import '../imagenes/Amorpropio.jpeg';
//import Amorpropio from '../imagenes/Amorpropio.jpeg';


function Home () {
  return (
    <>
    <p>Esta es mi página de home </p>
    <p>Bienvenido a psico-félix </p>
  
  
    <Bienvenida/>
   <Másinformacion/>
  
    </>
  );
}

export default Home;