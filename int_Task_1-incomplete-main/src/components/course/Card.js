import React from 'react'
import {Button} from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
export default function Card(props) {
  return (
    <React.Fragment>
      <div className='card'>
        <img alt='course_card' src={props.img} className='card-img-top' />
        <div className='card-body'>
          <h5 className="card-title"> {props.courseTitle} </h5>
          <h6 className='card-subtitle'> By : {props.authorName} </h6>
          <p> Course available in : 
            <span className='badge bg-primary text-white m-2' > English </span>  
            <span className='badge bg-primary text-white' > Hindi </span>  
          </p>
          <h5 className='mt-2'>
            Rating : <Rating value={props.rating} readOnly  />
          </h5>
          
          <br/>
          
          <h5 className='mt-2 mb-2'>
              Price :  &#8377;{props.price}
          </h5>

          <Button variant="outline-primary" size="lg" block>
            Add To Cart
          </Button>
          <Button variant="primary" size="lg" block>
            Buy Now
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}
