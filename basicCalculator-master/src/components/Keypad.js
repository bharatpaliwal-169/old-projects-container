import React ,{Component} from 'react';
import './main.css';



class Keypad extends Component{
    render(){
        return(
            <div className='keypad'>
                <div  className='row'>
                    <button name = "(" onClick={e => this.props.onClick(e.target.name)}
                        className='num'
                    >
                        (
                    </button>
                    <button className='num' name = ")" onClick={e => this.props.onClick(e.target.name)}>
                        )
                    </button>
                    <button className='num' name = "Clear" onClick={e => this.props.onClick(e.target.name)}>
                        C
                    </button>
                    <button className='CA' name = "Clear All" onClick={e => this.props.onClick(e.target.name)}>
                        CA
                    </button>
                    <br/>
                </div>
                <div  className='row'>
                    <button className='num' name = "7" onClick={e => this.props.onClick(e.target.name)}>
                        7
                    </button>
                    <button className='num' name = "8" onClick={e => this.props.onClick(e.target.name)}>
                        8
                    </button>
                    <button name = "9" className='num' onClick={e => this.props.onClick(e.target.name)}>
                        9
                    </button>
                    <button className='op' name = "/" onClick={e => this.props.onClick(e.target.name)}>
                        /
                    </button>
                    <br/>
                </div>
                <div  className='row'>
                    <button name = "4" className='num' onClick={e => this.props.onClick(e.target.name)}>
                        4
                    </button>
                    <button className='num' name = "5" onClick={e => this.props.onClick(e.target.name)}>
                        5
                    </button>
                    <button className='num' name = "6" onClick={e => this.props.onClick(e.target.name)}>
                        6
                    </button>
                    <button className='op' name = "*" onClick={e => this.props.onClick(e.target.name)}>
                        *
                    </button>
                    <br/>
                </div>
                <div  className='row'>
                    <button name = "1" className='num' onClick={e => this.props.onClick(e.target.name)}>
                        1
                    </button>
                    <button name = "2" className='num' onClick={e => this.props.onClick(e.target.name)}>
                        2
                    </button>
                    <button name = "3" className='num' onClick={e => this.props.onClick(e.target.name)}>
                        3
                    </button>
                    <button className='op' name = "+" onClick={e => this.props.onClick(e.target.name)}>
                        +
                    </button>
                    <br/>
                </div>
                <div  className='row'>
                    <button className='num' name = "." onClick={e => this.props.onClick(e.target.name)}>
                        .
                    </button>
                    <button className='num' name = "0" onClick={e => this.props.onClick(e.target.name)}>
                        0
                    </button>
                    <button name = "=" className='num' onClick={e => this.props.onClick(e.target.name)}>
                        =
                    </button>
                    <button className='op' name = "-" onClick={e => this.props.onClick(e.target.name)}>
                        -
                    </button>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Keypad;



