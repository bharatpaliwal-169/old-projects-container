import React, { Component } from 'react';
import OtpInput from 'react-otp-input';


export default class VerifyOtp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: '',
      numInputs: 4,
      separator: '-',
      isDisabled: false,
      hasErrored: false,
      isInputNum: true,
      isInputSecure: false,
      minLength: 0,
      maxLength: 40,
      placeholder: '',
    };
  }

  handleOtpChange = otp => {
    this.setState({ otp });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNumInputsChange = e => {
    let numInputs = e.target.value;
    const { minLength, maxLength } = this.state;

    if (numInputs < minLength || numInputs > maxLength) {
      numInputs = 4;

      console.error(
        `Please enter a value between ${minLength} and ${maxLength}`
      );
    }

    this.setState({ [e.target.name]: parseInt(numInputs, 10) });
  };

  clearOtp = () => {
    this.setState({ otp: '' });
  };

  handleCheck = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: !prevState[name] }));
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.otp);
  };

  render() {
    const {
      otp,
      numInputs,
      separator,
      isDisabled,
      hasErrored,
      isInputNum,
      isInputSecure,
    } = this.state;

    return (
      <React.Fragment>
        <div className='container'>
          <div className='row text-center'>
            <div className="col-12 col-sm-6 offset-sm-3 ">
              <h4 className="text-primary">Please check your Email for OTP Verification.</h4>
            </div>
            <div className="col-12 col-sm-6 offset-sm-3 text-center">
              <div className="">
                <form onSubmit={this.handleSubmit}>
                  <p>Enter verification code</p>
                  <div className="btn-row">
                    <OtpInput
                      inputStyle="inputStyle"
                      numInputs={numInputs}
                      isDisabled={isDisabled}
                      hasErrored={hasErrored}
                      errorStyle="error"
                      onChange={this.handleOtpChange}
                      separator={<span>{separator}</span>}
                      isInputNum={isInputNum}
                      isInputSecure={isInputSecure}
                      shouldAutoFocus
                      value={otp}
                    />
                  </div>
                  <div className="btn-row">
                    <button
                      className="btn btn-md btn-danger me-2"
                      type="button"
                      disabled={isDisabled || otp.trim() === ''}
                      onClick={this.clearOtp}
                    >
                      Clear
                    </button>
                    <button
                      className="btn btn-md btn-primary"
                      disabled={otp.length < numInputs}
                    >
                      Verify OTP
                    </button>
                  </div>
                </form>
            </div>

            </div>
            
          </div>
        </div>

      </React.Fragment>
    );
  }
}