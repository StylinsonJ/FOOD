import React, { Component } from "react";
import '../assets/css/Style.css';
import UserService from "../services/user.service";

import './../assets/css/Style.css';
import {Card, Button, InputGroup, FormControl, CardGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faSearch, faList, faEdit, faTrash,faStepBackward, faFastBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import MyToast from "./MyToast";
import axios from 'axios';

export default class BoardUser extends Component {
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
    UserService.getUserBoard().then(
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
      <div class="menu-box" className={"border border-dark bg-dark "}>
        <div class="container" >
          <div class="row">
            <div class="col-lg-12">
              
              <div  className={"text-white"}>
                <FontAwesomeIcon icon={faList}/> Menu de la Semana
              </div>
              <div style={{"float":"right"}}>
                  <InputGroup size="sm">
                      <FormControl placeholder="Search" name="search" value={search} 
                     
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
              <Card style={{ width: '20rem' }}  >
                    
              {
                foods.length === 0 ?
                <tr align="center">
                    <td colSpan="7"> No Foods Available</td>
                </tr> :
                foods.map((food) => (
                <tr key={food.id} >
                  <Card.Img variant="top" src={food.coverPhotoURL} width="80px" height="80px" />
                    <Card.Body >
                      <Card.Title>{food.title} - S/.{food.price}</Card.Title>
                      <Card.Text> {food.description} </Card.Text> 
                      <Button variant="primary">Pedir</Button>
                    </Card.Body>
                </tr>
                ))
              }
 </Card>  
 </div>
 
          
               {foods.length > 0 ?
                    <div>
                        <div style={{"float":"left"}} className="text-white">
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
                        </div> : null
                }      
              
              </div>
              </div>
         
      </div>
        
        
      
      
    );
  }
}