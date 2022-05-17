import React from 'react'
import useRegister from '../utills/useRegister'
import validate from '../utills/signupValidation'
import Link from 'next/link'

const Register = () => {
    const {handleChange, values , handleSubmit , errors}=useRegister(validate);
    return (
        <div>
            <div className="login-page">
                <div className="login-page-inner">
                    <img src="/images/14.png" alt="img1"></img>
                </div>
                <div className="login-page-inner-1">
                <div className="inner-2">
                    <div className="inner-2-img"><img src="/images/9.png" alt="login"  /></div>
                    <div className="inner-2-text">
                        <p>Already have account  ?</p>
                        <Link href="/Login"><a>Login</a></Link>
                    </div>
                </div>

                <div className="inner-3">
                    <h1>Create Account</h1>
                    <p>As a Associate you have the access to all service of FITAPES</p>
                </div>
            
                

                <div className="container">
                <div className="login-form">
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Full Name</label>
                            {errors.fullname && <p>{errors.fullname}</p>}
                            <input 
                            type="text" 
                            name="fullname" 
                            placeholder="Full name" 
                            autoComplete="off" 
                            id="full-name-2"
                            value ={values.fullname}
                            onChange = {handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email Addrress</label>
                            {errors.email && <p>{errors.email}</p>}
                            <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            autoComplete="off" 
                            id="email-2"
                            value={values.email}
                            onChange={handleChange}
                            />
                            
                        </div>
                        <div>
                            <label htmlFor="mobile no">Mobile Number</label>
                            {errors.number && <p>{errors.number}</p>}
                            <input 
                            type="text" 
                            name="number" 
                            placeholder="mob. number" 
                            autoComplete="off" 
                            id="mob-no-2"
                            value={values.number}
                            onChange={handleChange}
                            />
                            
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            {errors.password && <p>{errors.password}</p>}
                            <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            autoComplete="off" 
                            id="password-2"
                            value={values.password}
                            onChange={handleChange}
                            
                            />
                            
                        </div>
                        <div>
                            <label htmlFor="password">Confirm Password</label>
                            {errors.password1 && <p>{errors.password1}</p>}
                            <input 
                            type="password" 
                            name="password1" 
                            placeholder="confirm Password" 
                            autoComplete="off" 
                            id="password-2"
                            value={values.password1}
                            onChange={handleChange}
                            
                            />
                        </div>

                        <div className="checkbox-1">
                            <input type="checkbox" name="privacy" id="check-box" />
                            <h6>Accept all Privacy and Policy</h6>
                        </div>


                        <div className="submit-form"><button type="submit">Sign Up</button></div>
                    </form>
                </div>
            </div>                
        </div>
        </div>
    </div>
)
}

export default Register