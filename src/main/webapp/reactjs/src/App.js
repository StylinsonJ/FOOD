import React from 'react';
import './App.css';

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
