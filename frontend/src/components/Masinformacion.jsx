import React from 'react';
import { Link }  from 'react-router-dom';


const Masinformacion = (props) => {

        return (
    <>
   
     <div classNameName="dropdown-menu">
  <a classNameName="dropdown-item" href="#">Amor propio</a>

  <Link classNameName="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</Link>
  
  <Link classNameName="dropdown-item" href="#">Another link</Link>

  </div>

<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>

</>
      );
      
    }
    export default Masinformacion;