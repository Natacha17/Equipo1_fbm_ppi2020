import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import dayanna from '../imagenes/dayanna.png';
import karen from '../imagenes/karen.png';
import santiago from '../imagenes/santiago.png';
import natacha from '../imagenes/natacha.png';
import '../Estilos/Quienessomos.css';

class QuienesSomos extends Component {
    
    render() { 
        return ( 
          <>
          <h1 className="titulo1">¿Quienes Somos?</h1>
 <h4 classNameName="titulocont">Aquí se encuentran los creadores de la página</h4> 

 <div className="card" >
  <img className="fotosrios" className="card-img-top" src={santiago} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Santiago Ríos Quintero.</h5>
    <Link to= '/santiago' href="#" className="btn btn-primary">Conóceme</Link>
  </div>
</div>
<div className="card" >
  <img className="card-img-top" src={dayanna} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Dayanna Patricia Martínez Morelo.</h5>
    <Link to= '/dayanna' href="#" className="btn btn-primary">Conóceme</Link>
  </div>
</div>
<div className="card" >
  <img className="card-img-top" src={natacha} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Natacha Yanelis Fornier Rios.</h5>
    <Link to= '/natacha' href="#" className="btn btn-primary">Conóceme</Link>
  </div>
</div>
<div className="card" >
  <img className="card-img-top" src={karen} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Karen Alexandra Gordon Duque.</h5>
    <Link to= '/karen' href="#" className="btn btn-primary">Conóceme</Link>
  </div>
</div>
<footer>
<div className="copy">
  <i className="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
  <i className="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
  <i className="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
</div>
</footer>
  </>
         );
    }
}
 
export default QuienesSomos;