import React, {useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const Signup = () => {
  
  const user = useSelector(state => state.user)
  
  const [userDetails, setUserDetails] = useState({
    email: "",
    contactNumber: null,
    password: "",
    confirmPassoword:"",
  });
  
  const dispatch = useDispatch();
  
  const handleChange = e =>{
    const value = e.target.value;
    const name = e.target.name;
    if(name === 'email'){
      setUserDetails(prev => ({
        ...prev,
        email:value
      }));
    }
    else if(name === 'password'){
      setUserDetails(prev => ({
        ...prev,
        password:value
      }));
    }
    else if (name === 'confirmPassoword'){
      setUserDetails(prev => ({
        ...prev,
        confirmPassoword:value
      }))
    }
    else{
      setUserDetails(prev => ({
        ...prev,
        contactNumber:value
      }));
    }
  }
  
  const signUpUser = async () => {
    await axios.post('/signup', userDetails)
    .then(res => 
      {
        if(res.status === 200){
          dispatch({
            type:"SET_CURRENT_USER",
            payload:res.data
          });
          console.log(`User added: ${user}`);
        }else if(res.status === 206){
          alert(res.data.error);
        }
      }
    )
    .catch(err=>alert(err))

  };
  const handleSignUp = async(e) => {
  
    console.log(userDetails);
    e.preventDefault();
    signUpUser();
  }
  return (
  
  <React.Fragment>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 col-sm-6 text-center justify-center mt-2 card'>
            <div className='display-3 mt-3 mb-4 login-head'>Signup</div>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Control name = "email" onChange = {handleChange} value={userDetails.email} type='email' placeholder='Enter email' required />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword1' className='mb-2 mt-4'>
                <Form.Control
                  type='text'
                  placeholder='Your Contact Number'
                  required
                  name = "contact"
                  value = {userDetails.fullName}
                  onChange = {handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Control name = "password" onChange = {handleChange} value = {userDetails.password} type='password' placeholder='Password' required />

                <Form.Text className='text-muted'>
                  Please keep a strong password, atleast of 8 characters in
                  length.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword3'>
                <Form.Control name = "confirmPassoword" onChange = {handleChange} value = {userDetails.confirmPassoword} type='password' placeholder='Confirm Password' required />
              </Form.Group>

              <Button onClick={handleSignUp} variant='success' type='submit' className='mb-3' href='/'>
                Sign up
              </Button>

              <Form.Group controlId='formBasicEmail'>
                <Form.Text className='text-primary'>
                  Already have an account <Link to='/login'>Login</Link>
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
