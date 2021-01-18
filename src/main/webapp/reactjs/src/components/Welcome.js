import React ,{Component}from 'react';
import '../assets/css/StyleWelcome.css';
import { CardDeck, CardColumns, Card, Carousel, Jumbotron, Container } from 'react-bootstrap';

export default function Welcome() {
    
          return (
            <div>
            <meta charSet="utf-8" />
            {/* Compatibilidad */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />   
            {/* Mobile Metas - Control del tamaño viewport */}
            <meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimun-scale=1.0width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimun-scale=1.0" />
            <title>Index- Usuario</title>  
            {/* Enlaces con el HTML */}
            {/* Bootstrap CSS */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
            {/*FontAwesome*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
            {/*OwlCarousel*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" /> 
            {/*Custom CSS*/}
            <link rel="stylesheet" href="css/style.css" />  
            {/*Custom Font*/}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
            <link href="https://file.myfontastic.com/t5tNwfwUapz4yDzK3B6sfe/icons.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
            <Carousel>

              <Carousel.Item interval={1000}>
                  <img
                  className="d-block w-100"
                  src="https://livenewtab.com/wp-content/uploads/SearchFX2_5b229dafac40a9f608232bc8-e1534189919644.jpeg"
                  alt="First slide"
                  />
                  <Carousel.Caption>
                  <h1>FOOD: HECHO EN CASA</h1>
                  <h4>¡Come como en casa con la sazón que te gusta!</h4>
                  <p>Las mamás food saben cómo comes y te sirven bastante para que no fastidies</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={500}>
                  <img
                  className="d-block w-100"
                  src="https://footage.framepool.com/shotimg/qf/658565020-plato-principal-gastronomia-de-asia-bol-india.jpg"
                  alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h1>¿Que ofrecemos?</h1>
                  <h4>#MiMamáDice ¡No esperes a que me levante, come sin que te diga!</h4>
                  <p>Sientete como en casa, solo debes elegir un plato, realizar tu pedido con anticipación y comer a gusto!</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src="https://footage.framepool.com/shotimg/qf/960665646-plato-principal-gastronomia-de-asia-buda-religion-figura-objeto.jpg"
                  alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h1>¿Quienes somos?</h1>
                  <h4>¡Bienvenido al delivery de comida hecho en casa!</h4>
                  <p>Comerás rico y barato, que más quieres?</p>
                  </Carousel.Caption>
              </Carousel.Item>
              </Carousel>

              <br></br>
              <br></br>



            <CardDeck>
              <Card>
                  <Card.Img variant="top" src="https://www.recetips.com/uploads/recetas_ce89af3170d309eea9addbf67a3bc639.jpg" />
                  <Card.Body>
                  <Card.Title>ARROZ CON POLLO</Card.Title>
                  <Card.Text>
                      No se nos escapó el pollo, aquí lo atrapamos justamente para tí. Disfruta de su rico sabor con crema de papa a la huancaína.
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
              </Card>
              <Card>
                  <Card.Img variant="top" src="https://1.bp.blogspot.com/-QSWz-_-EEBI/WYtPeiMRJrI/AAAAAAAAKFE/ES3qAmSsjDQYfggvdDG1jBcl4j4E91qugCLcBGAs/s1600/arroz-chaufa.jpg" />
                  <Card.Body>
                  <Card.Title>ARROZ CHAUFA</Card.Title>
                  <Card.Text>
                      ¿Somos chinos? No. Pero nacionalizamos todo e inventamos un arroz asiático y le pusimos chaufa. Está bien rico con broster, asi que anímate.
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
              </Card>
              <Card>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/4d/74/77/4d747751afa24e865405debb4f689d67.jpg" />
                  <Card.Body>
                  <Card.Title>CAUSA RELLENA</Card.Title>
                  <Card.Text>
                      Un causón para mi causón. Fresca comida para un fresco como tu. 
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
              </Card>
              </CardDeck>

              <br></br>
              <br></br>


              <CardColumns>
                  <Card>
                      <Card.Img variant="top" src="https://www.qempo.com/blog/wp-content/uploads/2019/02/turr%C3%B3n-de-do%C3%B1a-pepa-postres-peruanos-1280x720.jpg" />
                      <Card.Body>
                      <Card.Title>TURRON</Card.Title>
                      <Card.Text>
                          Anda, una vez al día no hace daño. Un buen turroncito no hace daño a nadie, y mucho menos a tí, anda, te lo mereces. Compra.
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Img variant="top" src="https://cocineroperu.com/wp-content/uploads/2015/12/queque-vainilla-1.jpg" />
                      <Card.Body>
                      <Card.Title>Kekes</Card.Title>
                      <Card.Text>
                          Bizcocho de harina, mantequilla y huevos. Lleva frutas secas o confitadas.  
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Img variant="top" src="https://www.jamear.com/wp-content/uploads/2017/01/Mazamorra-morada-1.jpg" />
                      <Card.Body>
                      <Card.Title>Mazamorra morada</Card.Title>
                      <Card.Text>
                      La mazamorra morada es un postre típico de la gastronomía peruana elaborado a base de maíz morado concentrado con fécula. Se prepara especialmente en el mes de octubre.
                      </Card.Text>
                      </Card.Body>
                  </Card>
                  
              </CardColumns>  

              <br></br>
              <br></br>
                                        
            {/*Zona de Cobertura */}
            <section id="zona" className="contact">
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Encuentranos con Google Maps</h3>
                </div>
                <iframe src="https://www.google.com/maps/d/embed?mid=1XP75eGkYnztqjjlkLWwL5QzCxeS3gOVu" />
              </div>
            </section>
            {/*Footer */}

            <Jumbotron>
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
            </Jumbotron>
          </div>
        );
        }
    