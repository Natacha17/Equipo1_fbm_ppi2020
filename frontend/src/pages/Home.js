import React from 'react';
import Bienvenida from './Bienvenida';
import SalirdelaApp from './SalirdelaApp';
import Masinformacionpsicologo from './Masinformacionpsicologo';



function Home () {
  return (
    <>
    
    <p>Esta es mi página de home </p>
    <p>Bienvenido a psico-félix </p>
  
  
    <Bienvenida/>

  <SalirdelaApp/>
  <Masinformacionpsicologo/>
 
    </>
  );
}

export default Home;