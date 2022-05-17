import React,{Component} from 'react';
import './style.css';

class MainBody extends Component{
  render() {
    return(
      <div className='main-body'>
        <Welcome username='User' />
        <Greeting />

        <h3>Instructions:</h3>
        <ul>
          <li> This is the simple TODO app you can simply add your task in the input</li>
          <li>Once you are done with your task just click over it to delete</li>
          <li>You can add/remove any number of tasks. </li>
          <li>Your feedback is really valuable</li>
        </ul>
      </div>
    );
  }
}

class Welcome extends Component{
  render(){
    return(
      <h3 className='body-text'>Welcome <strong className='user'> {this.props.username} </strong> </h3>
    );
  }
}

function Greeting(props){
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if(hours < 12 && hours >= 2){
    timeOfDay = 'Good Morning!';
  }
  else if (hours >= 12 && hours <16) {
    timeOfDay = 'Good Afternoon!';
  }
  else if(hours>= 16 && hours < 22){
    timeOfDay = 'Good Evening!';
  }
  else{
    timeOfDay = 'Good Night!'
  }

  return(
    <p className='body-text' >{timeOfDay}</p>
  );
}



export default MainBody;
