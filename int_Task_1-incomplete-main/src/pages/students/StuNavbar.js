import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

import Sidebar from './Sidebar';

export default function NavbarMain() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg="success" variant="dark">
        <Navbar.Brand>
          <Sidebar />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-sm-3">
            <Nav.Link active href="#">NoSir - Student Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link active href="#">Help</Nav.Link>
            <Nav.Link active href="/login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
