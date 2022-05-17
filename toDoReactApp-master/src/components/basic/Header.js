import React,{Component} from 'react';
import Clock from './Clock';
import './style.css';
import Loginn from '../features/Loginn';

class Header extends Component {
  render(){
    return(
      <header>
        <div >
          <h1 className= 'head'> TODO App</h1>
        </div>
        <div className='timer'>
          <div className='loginn'>
            <Loginn />
          </div>
          <Clock />
        </div>

      </header>
    );
  }
}

export default Header;
