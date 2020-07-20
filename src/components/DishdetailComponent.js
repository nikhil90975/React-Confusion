import React,{ Component} from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    
    renderComment(comments){
        const comment = comments.map((comment) => {
            return (
            <div key = {comment.id} > 
            <p display = "inline">{comment.comment}</p>  
            <p display = "inline">{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric',month :'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>      
                
                
            </div>
            ); 
        });
        return(
            <div>
                {comment}
            </div>
                
        );
    }

    render() {
        
        if(this.props.SelectedDish!=null){
            return (
                <div className ="row">
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg width = "100%" src={this.props.SelectedDish.image} alt={this.props.SelectedDish.name} />
                        <CardBody>
                            <CardTitle>{this.props.SelectedDish.name}</CardTitle>
                            <CardText>{this.props.SelectedDish.description }</CardText>
                        </CardBody>
                    </Card>
                    
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComment(this.props.SelectedDish.comments)}
                </div>
                </div>
            );
        }else{
            return(
                <div>
                    <p>fcsdv</p>
                </div>
            );
        }
    }
}

export default DishDetail;