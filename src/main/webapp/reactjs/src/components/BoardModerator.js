import React, { Component } from "react";

import {connect} from 'react-redux';
import {deleteFood} from './../services/index';
import UserService from "../services/user.service";

import './../assets/css/Style.css';
import {Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faSearch, faList, faEdit, faTrash,faStepBackward, faFastBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import MyToast from "./MyToast";
import axios from 'axios';

class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      foods : [],
            search : '',
            currentPage : 1,
            foodsPerPage : 5,
            sortDir: "asc"
    };
  }
  sortData = () => {
    setTimeout(() => {
        this.state.sortDir === "asc" ? this.setState({sortDir: "desc"}) : this.setState({sortDir: "asc"});
        this.findAllFoods(this.state.currentPage);
    }, 1000);
  };
  componentDidMount() {
    UserService.getModeratorBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
    this.findAllFoods(this.state.currentPage); 
  }

  findAllFoods(currentPage){
    currentPage -= 1;
    axios.get("http://localhost:7999/rest/foods?pageNumber="+currentPage+"&pageSize="+this.state.foodsPerPage+"&sortBy=price&sortDir="+this.state.sortDir)
        .then(response => response.data)
        .then((data) =>{
            this.setState({
                foods: data.content,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                currentPage: data.number + 1
            });
        });
};

deleteFood = (foodId) => {
    axios.delete("http://localhost:7999/rest/foods/"+foodId)
    .then(response => {
        if(response.data != null) {
            this.setState({"show":true});
            setTimeout(() => this.setState({"show":false}), 3000);
            this.setState({
                foods: this.state.foods.filter(food => food.id !== foodId)
            });
        } else {
            this.setState({"show":false});
        }
    });
    };
/*
deleteFood = (foodId) => {
    this.props.deleteFood(foodId);
    setTimeout(() =>{
        if(this.props.foodObject != null){
            this.setState({"show":true});
            setTimeout(() => this.setState({"show":false}), 3000);
            this.findAllFoods(this.state.currentPage);
        }else{
            this.setState({"show":false});
        }
    }, 1000);
};
*/
changePage = event => {
    let targetPage = parseInt(event.target.value);
    if(this.state.search){
        this.searchData(targetPage);
    }else{
        this.findAllFoods(targetPage);
    }
    this.setState({
        [event.target.name]: targetPage
    });
};

firstPage = () => {
    let firstPage = 1;
    if(this.state.currentPage > firstPage) {
        if(this.state.search){
            this.searchData(firstPage);
        }else{
            this.findAllFoods(firstPage);
        }
    }
};

prevPage = () => {
    let prevPage = 1;
    if(this.state.currentPage > prevPage) {
        if(this.state.search){
            this.searchData(this.state.currentPage - prevPage);
        }else{
            this.findAllFoods(this.state.currentPage - prevPage);
        }
    }
};

lastPage = () => {
    let condition = Math.ceil(this.state.totalElements / this.state.foodsPerPage);
    if(this.state.currentPage < condition ){
        if(this.state.search){
            this.searchData(condition);
        }else{
            this.findAllFoods(condition);
        }
    }
};

nextPage = () => {
    if(this.state.currentPage < Math.ceil(this.state.totalElements / this.state.foodsPerPage)){
        if(this.state.search){
            this.searchData(this.state.currentPage +1);
        }else{
            this.findAllFoods(this.state.currentPage +1);
        }
    }
};

searchChange = event => {
    this.setState({
        [event.target.name] : event.target.value
    });
};

cancelSearch = () => {
    this.setState({"search" : ''});
    this.findAllFoods(this.state.currentPage);
};

searchData = (currentPage) => {
    currentPage -= 1;
    axios.get("http://localhost:7999/rest/foods/search/"+this.state.search+"?page="+currentPage+"&size="+this.state.foodsPerPage)
        .then(response => response.data)
        .then((data) =>{
            this.setState({
                foods: data.content,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                currentPage: data.number + 1
            });
        });
};

render() {
    const {foods, currentPage, totalPages, search} = this.state;

    return (
      <div>
                <div style={{"display":this.state.show ? "block" : 'none'}}>
                        <MyToast show = {this.state.show} message = {"Food deleted successfully."} type ={"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}> 
                    <Card.Header>
                        <div style={{"float":"left"}}>
                            <FontAwesomeIcon icon={faList}/> Food List
                       </div>
                        <div style={{"float":"right"}}>
                            <InputGroup size="sm">
                                <FormControl placeholder="Search" name="search" value={search} 
                                className={"info-border bg-dark text-white"}
                                onChange={this.searchChange}/>
                                <InputGroup.Append>
                                    <Button size="sm" variant="outline-info" type="button" onClick={this.searchData}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Button>
                                    <Button size="sm" variant="outline-danger" type="button" onClick={this.cancelSearch}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th onClick={this.sortData}>Price <div className={this.state.sortDir === "asc" ? "arrow arrow-up" : "arrow arrow-down"}></div></th>
                                <th>Type</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    foods.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="7"> No Foods Available</td>
                                    </tr> :
                                    foods.map((food) => (
                                    <tr key={food.id}>
                                        <td>
                                            <Image src={food.coverPhotoURL} roundedCircle width="50" height="40"/> {food.title}
                                        </td>
                                        <td>{food.description}</td>
                                        <td>{food.price}</td>
                                        <td>{food.type}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"edit/"+food.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit}/></Link>{' '}
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteFood.bind(this, food.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                    {foods.length > 0 ?
                    <Card.Footer>
                        <div style={{"float":"left"}}>
                            Showing Page {currentPage} of {totalPages}
                        </div>
                        <div style={{"float":"right"}}>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                        onClick={this.firstPage}>
                                        <FontAwesomeIcon icon={faFastBackward}/> First
                                    </Button>
                                    <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                        onClick={this.prevPage}>
                                        <FontAwesomeIcon icon={faStepBackward}/>Prev
                                    </Button>
                                </InputGroup.Prepend>
                                <FormControl className={"page-num bg-dark"} name="currentPage" value={currentPage}
                                        onChange={this.changePage}/>
                                <InputGroup.Append>
                                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                         onClick={this.nextPage}> 
                                        <FontAwesomeIcon icon={faStepForward}/>Next
                                    </Button>
                                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                         onClick={this.lastPage}>
                                        <FontAwesomeIcon icon={faFastForward}/>Last
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Card.Footer> : null
                }      
                </Card>
            </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      foodObject: state.food
  };
};

const mapDispatchToProps = dispatch => {
  return {
      deleteFood: (foodId) => dispatch(deleteFood(foodId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardModerator);
