import React ,{Component}from 'react';

import {Jumbotron} from 'react-bootstrap';

export default class Welcome extends Component {
    render(){
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Welcome to Food Store</h1>
                <blockquote className="blockquote mb-0">
                    <p>
                    This is a food.
                    </p>
                    <footer className="blockquote-footer">
                        PI-2020
                    </footer>

                </blockquote>
                
            </Jumbotron>
        );
    }
}
