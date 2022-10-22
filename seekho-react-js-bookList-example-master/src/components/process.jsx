
import React from 'react';
import Book  from "./Book";
import data from '../dataList';

const Book = (props) => {
  console.log(props);
  const {img,title,author,price} = props;
  
  return(
    <div className='col-12 col-md-4'>
      <div className='card  mt-1 p-3'>
        <img src ={img} alt='book' className='img-fluid' />
        <h2> {title} </h2>
        <h4> {author} </h4>
        <p className='text-muted'>&#8377;  {price}</p>
      </div>
    </div>
  );
};
