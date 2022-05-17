import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish) {
    return(
      <Card dish={dish}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(_comments) {
    const renderedComments = _comments.map((comment) =>
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <h6>--{comment.author}--</h6>
          <p> <i>{comment.date}</i> </p>
        </li>
    );


    if (_comments != null) {
      return renderedComments;
    } 
    
    else {
      return(
        <div></div>
      );
    }
  }

  render() {
    const { dish } = this.props;
    const dishComments = dish.comments;

    if (dish != null) {
      return(
        <div className="row">
          <div className="dishDetail col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
          <div className="comments col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {this.renderComments(dishComments)}
            </ul>
          </div>
        </div>
      );
    } 
    else {
      return(
        <div></div>
      );
    }
  }
}

export default DishDetail;