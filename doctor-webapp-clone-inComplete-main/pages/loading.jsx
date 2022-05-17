import React, { Component } from 'react';

import Loader from '../components/Loader'

class Loading extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-10 text-center align-item-center">
              <Loader />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Loading;
