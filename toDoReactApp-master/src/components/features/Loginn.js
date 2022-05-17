import React ,{Component} from 'react';

class Loginn extends Component{
  constructor(){
    super();
    this.state = {
      islogged: true
    };

    this.handel_logClick = this.handel_logClick.bind(this);
  }

  handel_logClick(){
    this.setState(prevState =>{
      return{
        islogged : !prevState.islogged
      };
    })
  }

  render(){
    let buttonText = this.state.islogged ? "LOG OUT" : "LOGIN";
    let displayText = this.state.islogged ? "Logged in" : "Logged Out"
    return(
      <div>
        <button className='login-btn' onClick={this.handel_logClick}>{buttonText}</button>
        <p> Current Status: {displayText} </p>
      </div>
    );
  }
}


export default Loginn;
