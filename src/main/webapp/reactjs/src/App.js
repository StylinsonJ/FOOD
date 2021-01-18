import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faSignOutAlt, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import AuthService from "./services/auth.service";
import Food from './components/Food/Food';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
          <img src="https://logos-download.com/wp-content/uploads/2018/04/Food_logo_uk.png" width="100" height="40"/>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
              <FontAwesomeIcon icon={faHome}/>Home
              </Link>
            </li>

            {showModeratorBoard && (

              <li className="nav-item">
                <Link to={"/mod"} className="nav-link"> Moderator Board</Link> 
                <Link to={"add"} className="nav-link">Añadir comida</Link>
                 
              </li>
              
             
              
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                <FontAwesomeIcon icon={faUser}/> User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                <FontAwesomeIcon icon={faSignOutAlt}/> LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                <FontAwesomeIcon icon={faUserPlus}/>Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/add" exact component={Food}/>
            <Route path="/edit/:id" exact component={Food}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

/*import React from 'react';
import './App.css';
import history from "history";
import "bootstrap/dist/css/bootstrap.min.css";

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Food from './components/Food/Food';
import FoodList from './components/Food/FoodList';
import UserList from './components/User/UserList';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Footer from './components/Footer';

export default function App() {

  return (
    <Router>
      <NavigationBar/>
    
        <Container>
            <Row>
              <Col lg={12} className={"margin-top"}>
                <Switch>
                  <Route path="/" exact component={Welcome}/>
                  <Route path="/add" exact component={Food}/>
                  <Route path="/edit/:id" exact component={Food}/>
                  <Route path="/list" exact component={FoodList}/>
                  <Route path="/list" exact component={FoodList}/>
                  <Route path="/users" exact component={UserList}/>
                  <Route path="/register" exact component={Register}/>
                  <Route path="/login" exact component={Login}/>
                  <Route path="/logout" exact component={Login}/>  
                 </Switch>
              </Col>
            </Row>
        </Container>
      <Footer/>
    </Router>
  );
}


import Product from "./routes/product/product";
import ProductDetail from "./routes/detail/productDetails";
import Checkout from "./routes/checkout/checkout";
import ShoppingBag from "./routes/shoppingBag";
import {SuccessPayment} from "./routes/successPayment";
import {CancelPayment} from "./routes/cancelPayment";


export default function App() {

  return (
    <Router>
      <NavigationBar/>
    
        <Container>
            <Row>
              <Col lg={12} className={"margin-top"}>
                <Switch>
                  <Route path="/" exact component={Welcome}/>
                  <Route path="/add" exact component={Food}/>
                  <Route path="/edit/:id" exact component={Food}/>
                  <Route path="/list" exact component={FoodList}/>
                  <Route path="/list" exact component={FoodList}/>
                  <Route path="/users" exact component={UserList}/>
                  <Route path="/register" exact component={Register}/>
                  <Route path="/login" exact component={Login}/>
                  <Route path="/logout" exact component={Login}/>

                  <Route path="/shopping-bag" exact component={ShoppingBag}/>
                  <Route path="/checkout" exact component={Checkout}/>
                  <Route path="/products/details/shopping-bag" exact component={ShoppingBag}/>
                  <Route path="/products/:details" exact component={ProductDetail}/>
                  <Route path="/products" exact component={Product}/>
                  <Route path="/checkout/success-payment/:id" exact component={SuccessPayment}/>
                  <Route path="/checkout/cancel-payment/:id" exact component={CancelPayment}/>
                
                 </Switch>
              </Col>
            </Row>
        </Container>
      <Footer/>
    </Router>
  );
}

*/