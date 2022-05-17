import React from 'react'

export default function Contact(props) {
    return (
    <React.Fragment>
    <section className="contact_banner">
        <div className="container">
            <div className="contact_inner text-center">
                <h2 className="main_heading">Contact Us</h2>
                <p className="main_heading2">We're here to help 24/7</p>
                <p className="sub_heading">Every guide is trained and excited to work with you, whether you need help with
                    a<br/>
                    password reset or you're looking for a team to build your complete web presence.</p>

                <img src="/images/contact_lft.png" id="contactLft" alt="image"/>
                <img src="/images/contact_rht.png" id="contactRht" alt="image"/>
            </div>
        </div>
    </section>

    <section className="type_of_contact">
        <div className="container">
            <div className="typeOfContact_inr">
                <div className="row">
                    <div className="col-md-4 border_right">
                        <div className="call_us">
                            <h3>Call Us</h3>
                            <p>Contact our award-winning <br/>support team</p>
                            <p>040 67607600</p>
                            <p id="support24">24/7 Support</p>
                            <p>Indian Directory <br/> Phone numbers and hours</p>
                        </div>
                    </div>
                    <div className="col-md-4 border_right">
                        <div className="chat_now">
                            <h3>Chat Now</h3>
                            <p>Chat with our sales and support team <br/>for quick answers on product<br/> features, pricing
                                and more.</p>
                            <button type="button" className="btn_base btn_black"><i className="fab fa-rocketchat"></i> Chat
                                Now</button>
                            <p>Hours: 24x7 Chat</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contactTypes">
                            <h3>Type of Contact</h3>
                            <form>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Last name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <button onClick={(e)=> props.submitPress(e)} type="submit" className="mt-3 btn_base submit_btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
    )
}
