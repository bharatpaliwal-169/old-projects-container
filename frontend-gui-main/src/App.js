import React, { Component }from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './route';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';
// import NavBarReact from './components/NavBarReact';
class App extends Component{
  render() {
    return (
      <React.Fragment>
          <Router>
            <BaseRouter {...this.props}  />
          </Router>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
