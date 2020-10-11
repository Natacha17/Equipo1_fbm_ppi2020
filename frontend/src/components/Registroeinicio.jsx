import React from 'react';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { Link }  from 'react-router-dom';


const Registroeinicio = (props) => {

        return (
    <>
 <Login/>
 <Link to= "/olvidar"classNameName="dropdown-item" href="#">¿Olvidaste tu contraseña?</Link>
 <Register/>
 
</>
      );
      
    }
    export default Registroeinicio;