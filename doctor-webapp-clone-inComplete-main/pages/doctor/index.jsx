import React, { Component } from 'react'
import Dashboard from '../../components/Doctor/Dashboard'
import Loader from '../../components/Loader';

export default class doctor extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      loading: true,
    }
  }
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000); 
  }

  componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }
  render() {
    if(this.state.loading) {
      return (
        <Loader />
      )
    }
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}
