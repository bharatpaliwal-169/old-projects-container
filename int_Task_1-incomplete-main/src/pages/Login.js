import React, {useState } from 'react'
import {Form,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Login = () => {

  const[person , setPerson] = useState({email:'',password:''})
  // const [people, setPeople] = useState([]);

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setPerson({...person,[name]:value});

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(person.email  &&  person.password){
      console.log(person.email , person.password);
      // const newPerson = {...person , id: new Date().getTime().toString()}
      // setPeople([...people,newPerson])
      // setPerson({firstName:'',email:'',age:''})
    } else{
      window.alert('Please fill each and every field!!')
    }
  };

  return (
    <React.Fragment>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 col-sm-6 text-center mt-5 card'>
            <div className='display-4 mt-2 mb-4 login-head'>Login</div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email"
                              placeholder="Enter email" 
                              autoFocus
                              name='email'
                              value={person.email}
                              onChange={handleChange}
                              required />
                
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" 
                              placeholder="Password"
                              autoFocus
                              name='password'
                              value={person.password}
                              onChange={handleChange}
                              required />
              </Form.Group>
              <Button variant="primary"
                      size="lg" type="submit"
                      onClick={handleSubmit}
                      className='mb-4'>
                Login
              </Button>

              <Form.Group controlId="formBasicEmail">
                <Form.Text className="text-muted">
                  Already have an account <Link to='/signup'>Signup</Link>
                </Form.Text>
              </Form.Group>

            </Form>
          </div>
        </div>
      </div>
      
    </React.Fragment>
    
    )
}
export default Login;