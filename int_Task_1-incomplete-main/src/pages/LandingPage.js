import React, { Component } from 'react';
import Navbar from '../components/NavbarMain';
import List from '../components/List';

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <List />
      </React.Fragment>
    )
  }
}
export default LandingPage;