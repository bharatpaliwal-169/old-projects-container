import React,{Component} from 'react';
import './style.css';
import Like from '../features/Like';

class Footer extends Component{
  render(){
    return(
      <footer className='footer-style'>
        <div className='flex-container'>
          <div>
            <p className='foot-text '> Created & Developed by: Bharat Paliwal </p>
          </div>
          <div>
            <Like />
          </div>
        
        </div>
      </footer>
    );
  }
}

export default Footer;
