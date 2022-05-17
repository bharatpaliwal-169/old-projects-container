import React,{Component} from 'react';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  //adding lifecycle to the clock
  //lifecycle methods .....
  //seting up timer
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({date: new Date()});
  }


  render(){
    return(
      <div>
        <h4>TIME : {this.state.date.toLocaleTimeString()}</h4>
      </div>
    );
  }
}

export default Clock;
