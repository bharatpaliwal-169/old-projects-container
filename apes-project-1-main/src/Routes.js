import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Main from './components/Main';
class BaseRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />{" "}
      </React.Fragment>
    )
  }
}

export default BaseRouter;