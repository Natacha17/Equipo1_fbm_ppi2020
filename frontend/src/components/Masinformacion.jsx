import React from 'react';
import { Link }  from 'react-router-dom';


const Masinformacion = (props) => {

        return (
    <>
   
     <div classNameName="dropdown-menu">
       <ul>
 <ol> <Link to= "/click" classNameName="dropdown-item" href="#">Amor propio</Link></ol>

 <ol><Link to="/click2"  classNameName="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Depresión</Link></ol>
  
 <ol><Link to="/click3" classNameName="dropdown-item" href="#">Acoso por internet</Link></ol>
 <ol><Link to= "/click4"classNameName="dropdown-item" href="#">Trastornos de alimentación</Link></ol>
  </ul>

  </div>


</>
      );
      
    }
    export default Masinformacion;