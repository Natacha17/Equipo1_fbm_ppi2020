import React from 'react';
import { Link }  from 'react-router-dom';
import '../Estilos/Masinformación.css';
import usuario  from '../imagenes/usuario.png';

const Menu = (props) => {

        return (
    <>
 <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/Bloquear'> <button  type="button" className="btn btn-sm btn-outline-primary">Chat</button></Link>         
              <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group">
               
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/e'><button type="button" className="btn btn-sm btn-outline-primary">Quienes Somos</button></Link>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
           
                  
                </div>  
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/Daños'><button type="button" className="btn btn-sm btn-outline-primary">Daños reportados</button></Link>     
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                </div>
              </div>

            <section ><div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={usuario} alt="" width="150" height="150"/>
            <div className="card-body">
            <Link to='/e'><button type="button" className="btn btn-sm btn-outline-primary">Quienes Somos</button></Link>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
           
                  
                </div>  
              </div>
            </div>
          </div>
        </div></section>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    

  </div>

</>
      );
      
    }
    export default Menu;
