import React from 'react';
import Bienvenida from './Bienvenida';
import Másinformacion from './Másinformacion';
import SalirdelaApp from './SalirdelaApp';
import Flecha from './Flecha';
import Masinformacionpsicologo from './Masinformacionpsicologo';
import Tiposdeconflicto from './Tiposdeconflicto';

function Home () {
  return (
    <>
    
    <p>Esta es mi página de home </p>
    <p>Bienvenido a psico-félix </p>
  
  
    <Bienvenida/>
   <Másinformacion/>

  <SalirdelaApp/>
 <Flecha/>
 <Masinformacionpsicologo/>
 <Tiposdeconflicto/>
    </>
  );
}

export default Home;