import React from 'react';

const Item = (props) => {
  return (
          <div className='col-5 col-sm-3' key={props.id}>
            <img key={props.id} src={props.img} alt='{item.title}' className='img-fluid card-img-top mt-2 mb-2 p-2' />
          </div>
        )
}
export default Item;