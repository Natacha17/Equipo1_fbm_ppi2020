import React, { Component } from 'react';


class Olvidarcontraseña extends Component {
    
    render() {
        return (
         <>
   <div className="container align-items-center mt-5 text-center">
    <form className="form-signin text-center align-items-center col-6">
    <h1 className="h3 mb-5 font-weight-normal text-center ">Recuperar cuenta</h1>
    <label for="inputEmail" className="sr-only mb-3">Documento de identidad</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required="" autofocus=""/>
    <label for="inputPassword" className="sr-only">Nueva contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Password" required=""/>
    <label for="inputPassword" className="sr-only">Confirmar contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Password" required=""/>
    <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Verificar</label>
    </div>
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Continuar</button>
    
    
    </form>
  </div>
  
  
</>

          ); 
        }
    }


 
export default Olvidarcontraseña;