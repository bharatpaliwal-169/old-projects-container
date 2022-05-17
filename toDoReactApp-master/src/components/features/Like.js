import React , {Component} from 'react';



class Like extends Component{
  constructor(){
    super();
    //inital state value

    this.state = {
      count:0
    };
    //Important!!!!

    //binding the handelClick function
    this.handelClick = this.handelClick.bind(this);

  }


  handelClick(){

    //updating the state......
    this.setState(prevState => {      //passing previous state as variable
//note that here return have {} instead of ()......
      return{
        count : prevState.count + 1
      };
    }) //updating state
  } //end handel click

  render(){
    return(
      <div className='like-area'>
        <button onClick={this.handelClick} className='button'>
          Like :
          <span> {this.state.count} </span>
        </button>
      </div>
    );
  }
}

export default Like;
