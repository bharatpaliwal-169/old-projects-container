import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import data from '../Data/Categories';


export default function NavbarMain() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg="info" variant="dark" sticky="top"  >
        <Navbar.Brand href="/"> NoSir </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-sm-3">
            
            <NavDropdown title="Category" id="basic-nav-dropdown" active>
              {data.map((item) => {
                return (
                  <NavDropdown.Item key={item.id} href={item.url} > {item.category} </NavDropdown.Item>
                )
              })}
            </NavDropdown>  
            
            <Form inline>
              <FormControl type="text" placeholder="&#x1F50E; Search" className="ml-sm-5" />
            </Form>
          </Nav>
          
          
          <Nav className='mr-sm-5'>
            <Nav.Link active href="/tutorsignup">Become a tutor</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link active href="/login">Login</Nav.Link>
            <Nav.Link active href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
