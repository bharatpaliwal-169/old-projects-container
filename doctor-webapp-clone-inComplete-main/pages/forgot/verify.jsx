import React, { Component } from 'react'
import style from '../../styles/forgot.module.css'
import OtpInput from 'react-otp-input';

export default class verify extends Component {

    state = { otp: '' };

    handleChange = otp => this.setState({ otp });
  
    handleOtp = (e) => {
      e.preventDefault();
      if(this.state.otp === '0000'){
        console.log("Success");
        
      }
      else{
        console.log("Error");
      }
    }



    render() {
        return (
            <div>
                <div className={style.forgot_top}>
                    <div className={style.forgot_inner2}>
                    <div className='container'>
                     <div className={style.textdanger}>
                         <h5 > OTP Verification </h5>
                       <h6>Please check your Email for OTP Verification.</h6>
                      <p>Enter your 4-digit otp code here </p>
                    </div>
              <section className={style.forceCenter}>
                <OtpInput
                  value={this.state.otp}
                  onChange={this.handleChange}
                  numInputs={4}
                  separator={<span> -- </span>}
                />
              </section>
            </div>
            <div className={style.verify}>
              <button  onClick={this.handleOtp}>
                Verify
              </button>
            </div>
          </div>
        </div>
                    </div>
        )
    }
}
