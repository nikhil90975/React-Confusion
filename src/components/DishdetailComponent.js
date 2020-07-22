import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        
            return (
                <Card >
                    <CardImg width = "100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description }</CardText>
                    </CardBody>
                </Card>
            );
        }
    function RenderComment({comments}){
        console.log(comments);
        const comment = comments.map((comment) => {
            return (
                
                    <div key = {comment.id} > 
                        <p display = "inline">{comment.comment}</p>  
                        <p display = "inline">{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric',month :'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>       
                    </div>
                
            
            ); 
        });
        return (
            <Card>
            <h2>Comments --</h2>
            {comment}
            </Card>
        );
    }

    const DishDetail = (props) => {
        if(props.SelectedDish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {props.SelectedDish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComment comments = {props.SelectedDish.comments} /> 
                        </div>
                    </div>
                        
                </div>
            );
        }else{
            return(
                <div>

                </div>
            )
        }
        
    }

export default DishDetail;