import React ,{Component}from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
                    <Link to={"register"} className="nav-link"><FontAwesomeIcon icon={faUserPlus}/> Register</Link>
                    <Link to={"login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt}/> Login</Link>
                </Nav>
            </>
        );

        const userLinks = (
            <>
                 <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add Food</Link>
                    <Link to={"list"} className="nav-link">Food List</Link>
                    <Link to={"users"} className="nav-link">User List</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"logout"} className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>  
                </Nav>
            </>
        );

        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-food-logo-designs-with-spoon-and-fork-png-image_4158238.jpg" width="25" height="25"/>Food Store
                </Link>
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