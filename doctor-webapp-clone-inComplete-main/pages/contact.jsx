import React, { Component } from 'react';
import Us from '../components/Contact';
import Download from '../components/Download';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {saveProfile} from '../Redux/action/ProfileAction'

class Contact extends Component {

  componentDidMount(){
    console.log(this.props.ProfileReducer, "ProfileReducer");
  }

  submitForm = (e) =>{
    e.preventDefault();
    console.log("submit pressed");
    const tempProfileObject = {
      id:1,
      name:'Prashant',
      jobNumber:1234,
      profileUrl:''
    }
    this.props.saveProfile(tempProfileObject)
    console.log(this.props.ProfileReducer, "ProfileReducer");
  }

  render() {
    console.log(this.props.ProfileReducer, "udated profile data")
    return (
      <React.Fragment>
        <Us submitPress={(e)=> this.submitForm(e)}/>
        <Download/>
      </React.Fragment>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    ProfileReducer: state.ProfileReducer
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveProfile
  }, dispatch);
}
let contactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);
export default contactContainer;