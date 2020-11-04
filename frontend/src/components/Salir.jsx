import React from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Salir.css';
import '../Estilos/Universal.css';

const Salir = (props) => {

        return (
    <>
    <h1>Psico-Félix</h1>
  <Link to="/regresar" href="#" class="regresar btn-primary btn-lg active" role="button" aria-pressed="true">Regresar al menú</Link>

  <Link to="/abandono" href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Abandonar</Link>

</>
      );
      
    }
    export default Salir;