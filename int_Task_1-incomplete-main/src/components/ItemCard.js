import React from 'react'
import Rating from '@material-ui/lab/Rating';
export default function ItemCard(props) {
  return (
    <React.Fragment>
      <div className='col-12 col-sm-4 col-md-3'>
        <div className='card mt-3'>
          <a href={props.url} rel="noopener noreferrer" >
            <img src={props.img} alt='...' className='card-img-top-main img-fluid img-responsive' />
          </a>

              <div className='card-body'>
                <h4 className='card-title mb-3'> {props.title} </h4>
                <h6 className='card-subtitle mb-2'> {props.authorName} </h6>
                <div>
                  <Rating value={props.rating} readOnly />
                </div>
                <h6 className=' mt-2'> Price : &#8377;{props.price} </h6>
              </div>
        </div>
      </div>
    </React.Fragment>
  )
}
