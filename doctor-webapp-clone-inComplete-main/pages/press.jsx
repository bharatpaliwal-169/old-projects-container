import React, { Component } from 'react';
import News from '../components/press'
import Download from '../components/download'
class press extends Component {
  render() {
    return (
      <React.Fragment>
        <News />
        <Download />
      </React.Fragment>
    );
  }
}

export default press;