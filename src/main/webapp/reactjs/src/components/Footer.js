import React, {Component} from 'react';

import {Navbar,Container, Col} from 'react-bootstrap'

export default class Footer extends Component {
    render(){
        let fullYear = new Date().getFullYear();

        return(
            <Navbar fixed="botton" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear-1}-{fullYear},Proyecto Integrador</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}