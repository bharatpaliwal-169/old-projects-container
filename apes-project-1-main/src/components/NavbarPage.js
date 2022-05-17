import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './styles/base.css';

const NavbarPage = (props) => {
  return (
    <React.Fragment>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="navbar-custom">
        <Navbar.Brand href="/" className="brand-de">
          <img
            src="./images/logo.png"
            width="120"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
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