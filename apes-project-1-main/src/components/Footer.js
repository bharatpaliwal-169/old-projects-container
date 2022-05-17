import React from 'react';
import './styles/base.css';

import logo from './images/logo.png';

const Footer = () => {
  return (
    <>
      <div className='row bg-dark text-white footer'>
        <div className='col-12 col-sm-4 offset-sm-1 mt-4'>
          <img src={logo} alt='logo' width='120' height='100' className='mb-4 img-fluid img-responsive' />
          <p>We are a full-scale creative digital marketing agency that bridges the gap between technology and creativity by creating captivating brand stories and exceptional digital experience for end-users. We are a group of passionate young individuals who understand the world of web and mobile technology as their home.</p>
        </div>
        <div className='col-12 col-sm-3 mt-4'>
          <p className='head-footer mb-4'>OUR OFFICE</p>
          <p>A-38, D, Mall, Shakti Khand 2,<br/> Indirapuram, Ghaziabad,<br/> Uttar Pradesh 201014</p>
        </div>
        <div className='col-12 col-sm-4 mt-4'>
          <p className='head-footer'> CONNECT WITH US</p>
          <ul className='nav'>
            <li> <i className='fa fa-facebook'></i> </li>
            <li> <i className='fa fa-twitter'></i> </li>
            <li> <i className='fa fa-instagram'></i> </li>
            <li> <i className='fa fa-linkedin'></i> </li>
          </ul>
          <p className='head-footer'>GET IN TOUCH</p>
          <p className='text-muted'> <span className="fa fa-envelope"> Contact us here</span> </p>
          <p className='head-footer'>WRITE TO US</p>
          <p className='mt-4 text-muted'>
            operations@onlineapes.com <br/>
            shashank@onlineapes.com
          </p>

        </div>
      </div>
    
    </>
  )

}

export default Footer;