import React from 'react';

function Footer(props) {
    return(
    <div className="footer bg-dark text-white">
        <div className="container-fluid">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><p dummy="#">Home</p></li>
                        <li><p dummy="#">About</p></li>
                        <li><p dummy="#">Menu</p></li>
                        <li><p dummy="contactus.html">Contact</p></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <p dummy="mailto:confusion@food.net">
                         confusion@food.net</p>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <p className="btn btn-social-icon btn-google" dummy="http://google.com/+"><i className="fa fa-google-plus"></i></p>
                        <p className="btn btn-social-icon btn-facebook" dummy="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></p>
                        <p className="btn btn-social-icon btn-linkedin" dummy="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></p>
                        <p className="btn btn-social-icon btn-twitter" dummy="http://twitter.com/"><i className="fa fa-twitter"></i></p>
                        <p className="btn btn-social-icon btn-google" dummy="http://youtube.com/"><i className="fa fa-youtube"></i></p>
                        <p className="btn btn-social-icon" dummy="mailto:"><i className="fa fa-envelope-o"></i></p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;