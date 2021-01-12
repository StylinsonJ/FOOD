import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, Col, Form, FormControl, InputGroup, Row, Button, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt, faUndo } from '@fortawesome/free-solid-svg-icons';
import {authenticatorUser} from '../../services/index';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email:'', password:'', error: ''
    };

    validateUser = () => {
        this.props.authenticatorUser(this.state.email, this.state.password);
        setTimeout(() =>{
            if(this.props.auth.isLoggedIn) {
                return this.props.history.push("/");
            }else{
                this.resetLoginForm();
                this.setState({"error":"invalid email and password"});
            }
        }, 500);
    };

    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };

    credentialChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render() {
        const {email, password, error} = this.state;

        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    {error && <Alert variant="danger">{error}</Alert> }
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header>
                            <FontAwesomeIcon icon={faSignInAlt}/> Login
                        </Card.Header> 
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="text" name="email" value={email} onChange={this.credentialChange}
                                            className={"bg-dark text-white"} placeholder="Enter Email Address"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="password" name="password" value={password} onChange={this.credentialChange}
                                         className={"bg-dark text-white"} placeholder="Enter Password"/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" type="buttom" variant="success" onClick={this.validateUser}
                                disabled={this.state.email.length === 0 || this.state.password.length === 0 }>
                                <FontAwesomeIcon icon={faSignInAlt}/> Login
                            </Button>{' '}
                            <Button size="sm" type="buttom" variant="info" onClick={this.resetLoginForm}
                                disabled={this.state.email.length === 0 && this.state.password.length === 0 && this.state.error.length === 0}>
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateProps = state => {
    return {
        auth:state.auth
    };
};

const mapDispatchProps = dispatch => {
    return{
        authenticatorUser: (email, password) => dispatch(authenticatorUser(email, password))
    };
};

export default connect(mapStateProps, mapDispatchProps)(Login);