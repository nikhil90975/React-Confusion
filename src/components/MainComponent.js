import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES } from '../shared/dishes';



class Main extends Component {

    constructor(props){
      super(props);
      this.state = {
        dishes:DISHES,
        selectedDish: null
      };
    }
    onDishSelected(dishId) {
        console.log("sss"+dishId);
        this.setState({ seletedDish : this.state.selectedDish = dishId });
    }
    render() {
    return (
      <div className = "container">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {console.log(this.state.dishes)}
        <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelected(dishId)} />
        {console.log("abc"+this.state.selectedDish)}
        <DishDetail SelectedDish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}
export default Main;
