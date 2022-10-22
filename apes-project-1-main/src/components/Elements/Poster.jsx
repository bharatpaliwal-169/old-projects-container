import React, { Component } from 'react';
import poster from '../images/poster.jpg';
import '../styles/base.css';

const Poster = () => {
  return (
    <div className='row'>
      <div className='col-12 col-sm-4 col-md-6'>
      <h2 className='display-3 my-5'>Creative and interactive Design </h2>
        <p className='my-4'>
          lorem ipsum
        </p>
      </div>
      <div className='col-12 col-sm-6'>
        <img src={poster} alt='poster' className='img-fluid img-responsive' />
      </div>
    </div>
  );
}
export default Poster;