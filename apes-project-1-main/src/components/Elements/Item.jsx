import React from 'react';

const Item = (props) => {
  return (
          <div className='col-12 col-sm-4' key={props.id}>
            <img key={props.id} src={props.img} alt='ghuit' className='img-fluid card-img-top mt-2 mb-2 p-2' />
          </div>
        )
}
export default Item;