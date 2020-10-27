import React from 'react';
import { Link }  from 'react-router-dom';


const Menuenbarra = (props) => {

        return (
    <>


    <div className="App">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand text-primary" href="index.html">  Psico-Félix </a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button
          class="btn btn-outline-primary my-2 my-sm-0"
          type="submit"  >
          Menú </button>
      </li>
      <ul class="nav-item">
       <Link to="/chat"> <button
          class="btn btn-outline-primary my-2 my-sm-0"
          type="submit"  >
          Chat
        </button></Link>
      </ul>
      <ul class="nav-item">
        <button
          class="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
        >
          Acerca de  </button>
      </ul>
      <ul class="nav-item dropdown text-dark">
       <Link to="/quienes"> <button
          class="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
        >
          ¿Quienes somos?
        </button></Link>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Karen Gordon
          </button>
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Dayanna Martínez
          </button>
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Natacha Fornier
          </button>
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Santiago Ríos
          </button>
        </div>
      </ul>
      <ul class="nav-item">
      <Link to="/masinfo">  <button
          class="btn btn-outline-primary my-2 my-sm-0"
          type="submit" >Más información</button></Link>
      </ul>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="¿Qué Buscas?"
        aria-label="Search"
      />
      <button
        class="btn btn-outline-primary my-2 my-sm-0"
        type="submit"> Buscar</button>
    </form>
  </div>
</nav>


</div>
</>
      );
      
    }
    export default Menuenbarra;