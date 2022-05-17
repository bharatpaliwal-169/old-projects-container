import React,{ Component} from 'react'
import {Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './App.css';
import * as actions from '../store/actions/auth';


class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(
            values.userName,
            values.email,
            values.password,
            values.confirm
        );
        this.props.history.push('/');
      }
    });
  }
  
  render() {
    return (
      
      <div className='col-12 col-sm-8 offset-sm-2 form-border mt-3'>
  
        {
          this.props.loading ?
            <div class="spinner-border text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          :
            <Form onSubmit={this.handleSubmit}>
              <Form.Label className=' display-4 mb-4 ml-2'>
                Sign-up 
                <span className='ml-4'>
                  <i class="fa fa-user-plus"></i>
                  {/* <i className="fa fa-sign-in"></i> */}
                </span>
              </Form.Label>
              
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
  
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <button className='btn btn-lg btn-success mr-3' htmlType='submit'>
                Signup
              </button> 
              <br/>
              <br/>
              
              OR
              <br/>
              Already have an account
              <Link to='/login' className='btn btn-lg btn-outline-primary ml-3 '>
                Login
              </Link>

          </Form>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);