import React from 'react'
import Link from 'next/link'
function index() {
    return (
    <React.Fragment>
      <header className="header">
        <div className="container">
            <div className="header_inr">
                <div className="header_lft d-flex align-items-center">
                    <Link href='/'>
                        <a className="logo"><img src="/images/logo.png" alt="logo"/></a>
                    </Link>
                    
                    <div className="menu_box">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="#">How to work</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header_rht ml-auto">
									<Link href='/Register'>
                    <a type="button" className="btn_base btn_black">Register</a>
									</Link>
                  <Link href='Login'>
										<a type="button" className="btn_base btn_blue login_btn">Login</a>
									</Link>
                </div>
                <div className="hamburge_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
    <div className="sidebar">
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#" className="active">About us</a></li>
                <li><a href="#">How to work</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>
    </div>
    </React.Fragment>
)
}
export default index;