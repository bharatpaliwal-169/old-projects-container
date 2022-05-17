import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
// import AntLogin from './components/AntLogin';
// import AntSignup from './components/AntSignup';

class BaseRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={ArticleList} />{" "}
        <Route exact path="/articles/:articleID/" component={ArticleDetails} />
        {/* <Route exact path="/login/" component={AntLogin} />
        <Route exact path="/signup/" component={AntSignup} /> */}
      </React.Fragment>
    )
  }
}

export default BaseRouter;