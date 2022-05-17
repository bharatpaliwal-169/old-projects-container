import React from 'react'
import Rating from '@material-ui/lab/Rating';
export default function TutorCard(props) {
  return (
    <React.Fragment>
      <div className='col-12 col-md-4'>
        <div className='card mt-3'>
          
          <img src={props.img} alt='...' className='card-img-top img-fluid img-responsive' />

            <div className='card-body'>
              <h4 className='card-title mb-3'> {props.name} </h4>
              <h6 className='card-subtitle mb-2'> {props.skills} </h6>
              <div>
                <Rating value={props.rating} readOnly />
              </div>
              <h6 className=' mt-2'> No of Videos : {props.numVideos} </h6>
            </div>
          </div>
      </div>

      <div className='col-12 col-md-6 offset-md-2'>
        Profile update form
      </div>
    </React.Fragment>
  )
}