import React ,{Component} from 'react';
import './main.css';
import Output from './Output';
import Keypad from './Keypad';


class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            result: ''
        };
    }

    onClick = button =>{
        if(button === "="){
            this.calculate()
        }
        else if(button === "Clear All"){
            this.reset()
        }
        else if(button === "Clear"){
            this.backspace()
        }
        
        else{
            this.setState({
                result : this.state.result + button
            });
        }
    }

    reset = () => {
        this.setState({
            result : ''
        });
    }

    backspace = () => {
        this.setState({
            result : this.state.result.slice(0,-1)
        });
    }

    calculate = () => {
        var calc = ''

        if(this.state.result.includes("--")){
            calc = this.state.result.replace("--","+")
        }

        else {
            calc = this.state.result
        }

        try{
            this.setState({
                result : (eval(calc) || "" )+ ""
            });
        }

        catch(e){
            this.setState({
                result: "error"
            });

        }
    }

    render(){
        return(
            <div className='container'>
                <Output output={this.state.result} />
                <Keypad onClick={this.onClick} />

            </div>

        );
    }
}

export default Main;