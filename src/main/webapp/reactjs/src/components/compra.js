import React, { Component } from "react";

export default class compra extends Component {

    render() {
        return (
            <div>
            <header id="barra">
              <div className="container">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <a className="navbar-brand" href="index.html">
                    <img src="img/logo.png" alt="" width="100px" className="logo" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="menu.html">Menu</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Ingresar</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown-a">
                          <a className="dropdown-item" href="LogIn.html">Iniciar Sesion</a>
                          <a className="dropdown-item" href="SignIn.html">Registrarse</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div>
                          <a href="carrito.html" className="btn btn-themeP">
                            Hacer Pedido <i className="fa fa-shopping-cart" />
                          </a>
                        </div>
                      </li>
                    </ul> 
                  </div>
                </nav>
              </div>
            </header>
            <br />
            <main>
              <div className="container">
                <div className="row mt-3">
                  <div className="col">
                    <h2 className="d-flex justify-content-center mb-3">Realizar Compra</h2>
                    <form id="procesar-pago" action="POST">
                      <div className="form-group row">
                        <label htmlFor="cliente" className="col-12 col-md-2 col-form-label h2">Cliente :</label>
                        <div className="col-12 col-md-10">
                          <input type="text" className="form-control" id="cliente" placeholder="Ingresa nombre cliente" name="destinatario" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="email" className="col-12 col-md-2 col-form-label h2">Correo :</label>
                        <div className="col-12 col-md-10">
                          <input type="email" className="form-control" id="correo" placeholder="Ingresa tu correo" name="cc_to" />
                        </div>
                      </div>
                      <div id="carrito" className="table-responsive">
                        <table className="table" id="lista-compra">
                          <thead>
                            <tr>
                              <th scope="col">Imagen</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Precio</th>
                              <th scope="col">Cantidad</th>
                              <th scope="col">Sub Total</th>
                              <th scope="col">Eliminar</th>
                            </tr>
                          </thead>
                          <tbody>
                          </tbody>
                          <tbody><tr>
                              <th colSpan={4} scope="col" className="text-right">SUB TOTAL :</th>
                              <th scope="col">
                                <p id="subtotal" />
                              </th>
                              {/* <th scope="col"></th> */}
                            </tr>
                            <tr>
                              <th colSpan={4} scope="col" className="text-right">IGV :</th>
                              <th scope="col">
                                <p id="igv" />
                              </th>
                              {/* <th scope="col"></th> */}
                            </tr>
                            <tr>
                              <th colSpan={4} scope="col" className="text-right">TOTAL :</th>
                              <th scope="col">
                                <p id="total" />
                              </th>
                              {/* <th scope="col"></th> */}
                            </tr>
                          </tbody></table>
                      </div>
                      <div className="row justify-content-center" id="loaders">
                        <img id="cargando" src="img/cargando.gif" width={220} />
                      </div>
                      <div className="row justify-content-between">
                        <div className="col-md-4 mb-2">
                          <a href="index.html" className="btn btn-info btn-block">Seguir comprando</a>
                        </div>
                        <div className="col-xs-12 col-md-4">
                          <button href className="btn btn-success btn-block" id="procesar-compra">Realizar
                            compra</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
            {/*Footer */}
            <section id="pie">
              <footer className="footer">
                <hr />
                <div className="container">
                  <div className="header-top d-flex justify-content-between pt-2">
                    <div className="d-flex justify-content-between">
                      <div className="item px-2">
                        <p>Siguenos:</p>
                      </div>
                      <div className="item px-2">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </div>
                      <div className="item px-2">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </div>
                      <div className="item px-2">
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="item px-2">
                        <p><i className="fas fa-phone-square" />+51939279572</p>
                      </div>
                      <div className="item px-2">
                        <p> <i className="fas fa-map-marker-alt" />Peru,Lima</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <center>
                    <p className="copy">© PROYECTO INTEGRADOR | 2020-2</p>
                  </center>
                </div>
              </footer>
            </section>
            <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/sweetalert2.min.js"></script>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>

    <script type="text/javascript">
        emailjs.init('user_sZawj5XieAFyfmD96oVXM')
    </script>

    <script src="js/carrito.js"></script>
    <script src="js/compra.js"></script>
          </div>
        );
    }
}