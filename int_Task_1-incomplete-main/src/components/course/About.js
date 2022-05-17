import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
export default function About(props) {
  return (
    <React.Fragment>
        <div className='col-12 col-md-6 mt-5 '>
          <h1 className='mt-3 mb-3 about'>About The Course</h1>
          
          <h6 className='mt-4 mb-4 text-muted'> Instructor : {props.authorName} </h6>
          <div className='mt-3 mb-3 card'>
            <h5 className='card-header'> Description </h5>
            <p className='mt-2'> 
              lorem ipsum dolor sit amet lorem ipsum............
            </p>
          </div>
          

          <h5 className='mt-2'>
            Rating : <Rating value={props.rating} readOnly  />
          </h5>
          
          <br/>
          
          <h5 className='mt-2 mb-2'>
              Price :  &#8377;{props.price}
          </h5>
          <br/>
          <Button variant="outlined" color="primary" href="#">
            Enroll Now
          </Button>
        </div>
    </React.Fragment>
  )
}
