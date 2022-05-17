import React ,{Component} from 'react';
import './main.css';

class Output extends Component{
    render(){
        let {output} = this.props;
        return(
            <div className='result'>
                <p> {output} </p>
            </div>
        );
    }
}

export default Output;

