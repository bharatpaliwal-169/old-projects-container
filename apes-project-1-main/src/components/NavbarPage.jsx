import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './styles/base.css';

const NavbarPage = (props) => {
  return (
    <React.Fragment>
      <Navbar fixed="sticky" collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-custom">
        <Navbar.Brand href="/" className="brand-de">
          <img
            src="./images/logo.png"
            width="520"
            height="500"
            className="d-inline-block align-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-de">
            <Nav.Link href="/" active>Home</Nav.Link>
            <Nav.Link href="/about">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default NavbarPage;