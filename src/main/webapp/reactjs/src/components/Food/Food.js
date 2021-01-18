import React, {Component} from 'react';

import {connect} from 'react-redux';
import {saveFood, updateFood, fetchFood} from '../../services/index';
import {Card, Form, Button, Col, InputGroup, Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave,faPlusSquare, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import MyToast from "../MyToast";
import axios from 'axios';

class Food extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state = {
            types: [],
            show : false
        };
        this.foodChange = this.foodChange.bind(this);
        this.submitFood = this.submitFood.bind(this);
    }

    initialState = {
        title:'', description:'', coverPhotoURL:'', price:'', type:''
    };

    componentDidMount() {
        const foodId = +this.props.match.params.id;
        if(foodId) {
           this.findFoodById(foodId);
        }
        this.findAllTypes();
    }

    findAllTypes = () => {
        axios.get("http://localhost:7999/rest/foods/types")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    types: [{value:'', display:'Select Type'}]
                        .concat(data.map(type => {
                            return {value:type, display:type}
                        }))
                });
            });
    };

    findFoodById = (foodId) => {
        this.props.fetchFood(foodId);
        setTimeout(() => {
            let food = this.props.foodObject.food;
            if(food != null) {
                this.setState({
                    id: food.id,
                    title: food.title,
                    description: food.description,
                    coverPhotoURL: food.coverPhotoURL,
                    price: food.price,
                    type: food.type
                });
            }
        }, 1000);
    };


    resetFood = () => {
        this.setState(() => this.initialState);
    };

    
    submitFood = event => {
        event.preventDefault();

        const food = {
            title: this.state.title,
            description: this.state.description,
            coverPhotoURL: this.state.coverPhotoURL,
            price: this.state.price,
            type: this.state.type
        };

        this.props.saveFood(food);
        setTimeout(() => {
            if(this.props.savedFoodObject.food != null){
                this.setState({"show":true, "method":"post"});
                setTimeout(() => this.setState({"show":false}), 3000);
            }else{
                this.setState({"show":false});
            }
        }, 2000);

        this.setState(this.initialState);
    };

    updateFood = event =>{
        event.preventDefault();

        const food = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            coverPhotoURL: this.state.coverPhotoURL,
            price: this.state.price,
            type: this.state.type
        };

        this.props.updateFood(food);
        setTimeout(() => {
            if(this.props.updatedFoodObject.food != null){
                this.setState({"show":true, "method":"put"});
                setTimeout(() => this.setState({"show":false}), 3000);
            }else{
                this.setState({"show":false});
            }
        }, 2000);

        this.setState(this.initialState);
    };

    foodChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    foodList = () => {
        return this.props.history.push("/list");

    };

    render(){
        const {title, description, coverPhotoURL,price,type} = this.state;

        return(
            <div>
                <div style={{"display":this.state.show ? "block" : 'none'}}>
                    <MyToast show = {this.state.show} message={this.state.method ==="put" ? "Food updated successfully." : "Food saved successfully."} type = {"success"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}> 
                    <Card.Header>
                        <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare}/> {this.state.id ? "Update Food" : "Add New Food"}
                    </Card.Header>
                    <Form onReset={this.resetFood} onSubmit={this.state.id ? this.updateFood : this.submitFood} id="foodFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="title"
                                        value={title}
                                        onChange={this.foodChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter Food Title" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridType">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control required as="select" 
                                    custom onChange={this.foodChange} 
                                    name="type" value={type}  className={"bg-dark text-white"}>
                                        {this.state.types.map(type =>
                                            <option key={type.value} value={type.value}>
                                                {type.display}
                                            </option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                    <Form.Label>Cover Photo URL</Form.Label>
                                    <InputGroup>
                                        <Form.Control required autoComplete="off"
                                            type="test" name="coverPhotoURL"
                                            value={coverPhotoURL}
                                            onChange={this.foodChange}
                                            className={"bg-dark text-white"}
                                            placeholder="Enter Food Cover Photo URL" />
                                        <InputGroup.Append>
                                            {this.state.coverPhotoURL !== '' && <Image src={this.state.coverPhotoURL} roundedRight width="40" height="38"/>}
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="price"
                                        value={price}
                                        onChange={this.foodChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter Food Price" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="test" name="description"
                                        value={description}
                                        onChange={this.foodChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Enter Food Description" />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave}/>{this.state.id ? " Update" : " Save"}
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button> {' '}
                            <Button size="sm" variant="info" type="buttom" onClick={this.foodList.bind()}>
                            <FontAwesomeIcon icon={faList}/> Book List
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        savedFoodObject: state.food,
        foodObject: state.food,
        updatedFoodObject: state.food
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveFood: (food) => dispatch(saveFood(food)),
        updateFood: (food) => dispatch(updateFood(food)),
        fetchFood: (foodId) => dispatch(fetchFood(foodId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Food);
