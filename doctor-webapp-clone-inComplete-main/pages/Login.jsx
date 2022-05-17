import React from 'react'
import useLogin from '../utills/useLogin'
import validate from '../utills/loginValidation'
import Link from 'next/link'

function Login() {
  //custom hook
  const {handleChange, values , handleSubmit , errors} = useLogin(validate);
  return (
    <React.Fragment>
      <div>
          <div className="login-page">
              <div className="login-page-inner">
                  <img src="/images/login.png" alt="img1"></img>
              </div>
              <div className="login-page-inner-1">
                  <div className="inner-2">
                      <div className="inner-2-img"><img src="/images/9.png" alt="login"  /></div>
                      <div className="inner-2-text">
                      <p>Still no account ?</p>
                      <Link href="/Register"><a>Create new account</a></Link>
                  </div>
                  </div>

                <div className="inner-3">
                    <h1>Welcome</h1>
                    <p>Login to access all your Fitapes product</p>
                </div>
              
              <div className="container">
              <div className="login-form">
                  <form action="" onSubmit={handleSubmit}>
                      <div>
                          <label htmlFor="email">Username or email</label>
                          {errors.email && <p>{errors.email}</p>}
                          <input type="text" name="email" placeholder="Username or email" autoComplete="off" id="email-1"
                              value ={values.email}
                              onChange = {handleChange}
                              
                              ></input>
                      </div>
                      <div>
                          <label htmlFor="password">Password</label>
                          {errors.password && <p>{errors.password}</p>}
                          <input type="password" name="password" placeholder="Password" autoComplete="off" id="password-1"
                            value ={values.password}
                            onChange = {handleChange}
                            ></input>
                      </div>
                      <div className="submit-form"><button type="submit">Log in</button></div>
                  </form>
              </div>
              </div>
              </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Login
