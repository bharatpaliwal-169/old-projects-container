import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
    <div className="footer bg-dark text-white ">
        <div className="container-fluid">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5 className='text-title ft'>Links</h5>
                    <ul className="list-unstyled text-center ">
                        <li><Link to='/' className='link-style'>Home</Link></li>
                        <li><Link to='/cart'className='link-style' >Cart</Link></li>
                        <li><Link to='/contact'className='link-style'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5 className='text-title ft' >Shipper's Contact</h5>
                    <address className='text-center ' >
                        21, Ghandhi Road<br />
                        Cyber City West,Gurgaon<br />
                        New Delhi<br />
                        <i className="fa fa-phone fa-lg"></i>: +91-8690865493<br />
                        <i className="fa fa-fax fa-lg"></i>: +123456789<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:shipperEkart@gmail.com">
                        shipperEkart@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 justify-content-center">
                    <div className='text-title  ft'>
                        Developer's Connect
                    </div>
                    <div className="text-center p-4">
                        <a className="btn btn-md btn-social-icon btn-facebook mx-1"  href="https://www.facebook.com/bharat.paliwal.3958914" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-md btn-social-icon btn-linkedin mx-1"  href="https://www.linkedin.com/in/bharat-paliwal-ab7169179/"rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-md btn-social-icon btn-twitter mx-1" href="https://twitter.com/BharatP58380618" target="_blank"rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-md btn-social-icon btn-instagram mx-1" href="https://www.instagram.com/_bharat_231/"rel="noopener noreferrer" target="_blank"><i class="fa fa-lg fa-instagram"></i></a>  
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p className='text-title' >© Bharat Paliwal</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;