import React, { Component } from "react";
import {Link} from 'react-router-dom'; 
import Menuenbarra from "../components/Menuenbarra";
import '../Estilos/Clasificacion.css';


class Clasificacion extends Component {
  render() {
    return (
      <>

<h1 className="Titleclasi">Clasificación</h1>
<Menuenbarra/>

<div className='clasific'>


<h2> ¿Cómo clasificas tu conflicto?</h2>
 <Link to ="/leve">
 <button class="Leve" type="submit">Leve</button></Link>


<Link  to="/grave"><button class="grave" type="submit">Grave</button></Link>

<Link to='/critico'><button class="critico" type="submit">Crítico</button></Link>

<h3>Mensaje del día</h3>
<p class="Mensa">
El éxito es ir de fracaso en fracaso sin perder el entusiasmo. –
Winston Churchill
</p>

<footer>
<div class="copyright">
  <p>Todos los derechos reservados 2020-2021</p>
  <i class="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
  <i class="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
</div>
</footer>

<script
src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"
></script>
<script
src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
crossorigin="anonymous"
></script>
<script
src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
crossorigin="anonymous"
></script>

</div>
</>
);
}
}
export default Clasificacion;