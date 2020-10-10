import React from 'react';
import Bienvenida from './Bienvenida';
import Másinformacion from './Másinformacion';


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