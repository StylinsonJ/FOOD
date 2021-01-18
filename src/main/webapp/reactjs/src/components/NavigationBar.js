import React ,{Component}from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faSignOutAlt, faHome, faHouseDamage, faUtensils, faMoneyBill, faMoneyBillAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import {logoutUser} from '../services/index';


class NavigationBar extends Component {
    logout = () => {
        this.props.logoutUser();
    };

    render(){
        const guestLinks = (
            <>
                <div className="mr-auto"></div>
                <Nav className="navbar-right">
                    <Link to={"register"} className="nav-link"><FontAwesomeIcon icon={faUserPlus}/> Registrarse</Link>
                    <Link to={"login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>
                </Nav>
            </>
        );

        const userLinks = (
            <>
                 <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Añadir comida</Link>
                    <Link to={"list"} className="nav-link">Listar Comida</Link>
                    <Link to={"users"} className="nav-link">Lista de usuarios</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"logout"} className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/> Cerrar Sesión</Link>  
                </Nav>
            </>
        );

        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="https://logos-download.com/wp-content/uploads/2018/04/Food_logo_uk.png" width="100" height="40"/>
                </Link>
                <Link to={"/"} className="nav-link"><FontAwesomeIcon icon={faHome}/> Home</Link>
                <Link to={"list"} className="nav-link"><FontAwesomeIcon icon={faUtensils}/> Menu</Link>
                <Link to={"add"} className="nav-link">Añadir comida</Link>
                 {this.props.auth.isLoggedIn ? userLinks : guestLinks}
            </Navbar>
        );
    };
};

const mapStateProps = state => {
    return {
        auth:state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return{
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateProps, mapDispatchToProps)(NavigationBar);