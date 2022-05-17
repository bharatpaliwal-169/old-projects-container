import React from 'react';


const Book = (props) => {
  // console.log(props);
  const {img,title,author} = props;
  return(
    <div className='col-12 col-md-4'>
      <div className='card  mt-1 p-3'>
        <img src ={img} alt='book' className='img-fluid' />
        <h2> {title} </h2>
        <h4> {author} </h4>
      </div>
    </div>
  );
};



export default Book;
