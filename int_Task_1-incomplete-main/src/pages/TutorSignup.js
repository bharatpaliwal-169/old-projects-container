import React, { Component } from 'react';
import {Form,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';



class TutorSignup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-12 col-sm-6 text-center mt-5 card'>
              <div className='display-4 mt-2 mb-4 login-head'>Sign up as Tutor</div>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicPassword" className="mb-4 mt-2">
                  <Form.Control type="text" placeholder="Your Full Name" required />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" required />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" required  />
                  
                  <Form.Text className="text-muted">
                    Please keep a strong password, atleast of 8 characters in length.
                  </Form.Text>
                
                </Form.Group>

                <Form.Group>
                <Form.Text className="text-muted mt-3 mb-2">
                    Upload a valid document showing your GST no. or PAN Card no.
                  </Form.Text>
                  <Form.File id="GST_PAN" />
                </Form.Group>


                <Button variant="success" type="submit" className='mb-4'>
                  Sign up as Tutor
                </Button>

                <Form.Group controlId="formBasicEmail">
                  <Form.Text className="text-muted">
                    Already have an account <Link to='/login'>Login</Link>
                  </Form.Text>
                </Form.Group>

              </Form>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default TutorSignup;