import React,{ Component} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

class NavBarReact extends Component {

  render() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Articles DJ-React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/">Posts</Nav.Link>
            {this.props.isAuthenticated ? 
                <Nav.Link  href="/logout" onClick={this.props.logout}>
                  Logout
                </Nav.Link>
              :
                <Nav.Link href="/login">
                  Login
                </Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
}


const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.Logout()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NavBarReact));