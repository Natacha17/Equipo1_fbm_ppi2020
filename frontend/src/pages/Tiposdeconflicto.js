import React, { Component } from 'react';


class Tiposdeconflicto extends Component {
  render() {
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
                  <button
                    class="btn btn-outline-primary my-2 my-sm-0"
                    type="submit"  >
                    Chat
                  </button>
                </ul>
                <ul class="nav-item">
                  <button
                    class="btn btn-outline-primary my-2 my-sm-0"
                    type="submit"
                  >
                    Acerca default
                  </button>
                </ul>
                <ul class="nav-item dropdown text-dark">
                  <button
                    class="btn btn-outline-primary my-2 my-sm-0"
                    type="submit"
                  >
                    ¿Quienes somos?
                  </button>

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
                  <button
                    class="btn btn-outline-primary my-2 my-sm-0"
                    type="submit" >Más información</button>
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
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active"></div>
              <div class="carousel-item"></div>
              <div class="carousel-item"></div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only"></span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only"></span>
            </a>
          </div>
        </div>
        <h1>Tipos de Conflictos</h1>
        <h2>Conflicto intrapersonal</h2>
        <p class="1">
          Este conflicto ocurre de forma interna, en la mente del individuo.
        </p>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button>

        <h2>Conflicto interpersonal</h2>
        <p class="2">
          Se producen en los procesos de interacción entre personas.
        </p>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button>

        <h2>Conflicto relacionales</h2>
        <p class="3">Ocurren entre miembros de una familia, amigos o pareja.</p>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button>

        <h2>Conflictos de personalidad</h2>
        <p class="1">
          La personalidad puede ser la base de muchos conflictos intergrupales.
        </p>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button>

        <h2>Otro tipo de conflicto</h2>
        <p class="1"></p>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Seleccionar
        </button>

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
          crossorigin="anonymous" ></script>
      </>
    );
  }
}
export default Tiposdeconflicto;
         