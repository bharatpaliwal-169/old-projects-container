import React,{ Component} from 'react'
import {Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './App.css';
import * as actions from '../store/actions/auth';


class Login extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    
    
    // this.props.onAuth(username,password);
    // this.props.history.push('/');
    
  }
  
  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    return (
      
      <div className='col-12 col-sm-8 offset-sm-2 form-border mt-3'>
        {errorMessage}

        {
          this.props.loading ?
            <div class="spinner-border text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          :
            <Form onSubmit={this.handleSubmit}>
              <Form.Label className=' display-4 mb-4 ml-2'>
                Login 
                {/* <i class="fa fa-user-plus"></i> */}
                <span className='ml-4'>
                  <i className="fa fa-sign-in"></i>

                </span>
              </Form.Label>
              
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                
              </Form.Group>
  
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
  
              <button className='btn btn-lg btn-primary mr-3' htmlType='submit'>
                Login
              </button> 
              <br/>
              <br/>
              
              OR
              <br/>
              Create a new account
              <Link to='/signup' className='btn btn-lg btn-outline-primary ml-3 '>
                SignUp
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);