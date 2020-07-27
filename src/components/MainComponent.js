import React, { Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES } from '../shared/dishes';
import {COMMENTS } from '../shared/comments';
import {LEADERS } from '../shared/leaders';
import {PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './contactComponent';
import About from './about';
import { Switch, Route,Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props){
      super(props);
      this.state = {
        dishes:DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        selectedDish: null
      };
    }
    // onDishSelected(dishId) {
    //     console.log("sss"+dishId);
    //     this.setState({ seletedDish : this.state.selectedDish = dishId });
    // }

    render() {
        const HomePage = () => {
          return(
          <Home 
          dish= {this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion= {this.state.promotions.filter((promo) => promo.featured)[0]}
          leaders= {this.state.leaders.filter((leader) => leader.featured)[0]}  
          />
          
          );
        }
    const AbouT = () => {
      return (
        <About leaders = {this.state.leaders} />
      )
    }
    const DishWithId = ({match}) =>{
        return (
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          />
        )
    }
    return (
      <div >
        <Header />
          <Switch>
            <Route path = "/React-Confusion/home" component = {HomePage} />
            <Route exact path = "/React-Confusion/menu" component = {() => <Menu dishes = {this.state.dishes } />} />
            <Route path ="/React-Confusion/menu/:dishId" component={DishWithId} />
            <Route exact path = '/React-Confusion/contactus' component={Contact} />
            <Route exact path = "/React-Confusion/aboutus" component = {AbouT} />
            < Redirect to = "/React-Confusion/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
