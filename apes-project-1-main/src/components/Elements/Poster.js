import React, { Component } from 'react';
import poster from '../images/poster.jpg';
import '../styles/base.css';

class Poster extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12 col-sm-6'>
        <h2 className='display-3 mt-5 bold info-head'>Creative and interactive Design </h2>
          <div className='liner' ></div>
          <p className='mt-4'>
            We believe in creating content that works. We are focused on producing quality content for virtually every online channel at the rapid speed of culture.
            <br/>
            <br/>
            Our seamless Creative content design and execution ensures that we not only make the best content possible but that itʼs backed by laser focus targeting, 
            instant analytics, and, positively, no ad waste.
          </p>
        </div>
        <div className='col-12 col-sm-6'>
          <img src={poster} alt='poster' className='img-fluid img-responsive' />
        </div>
      </div>
    );
  }
}

export default Poster;