import React,{ Component} from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id}  className="col-12 col-md-5 m-1">
                    <p>{dish.id}</p>
                    <Card  onClick={() => this.props.OnClick(dish.id)}>
                        {console.log("menu"+dish.id+this.props.OnClick)}
                        <CardImg width = "100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className = "container">
                <div className="row">
                    {menu}
                </div>    
            </div>
        );
    }
}

export default Menu;