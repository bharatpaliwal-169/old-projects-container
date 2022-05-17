import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import TutorSignup from "./pages/TutorSignup";
import { useSelector } from "react-redux";
import Profile from './pages/tutors/Profile';
import Dashboard from './pages/tutors/Dashboard';
import StuDashboard from './pages/students/Dashboard';

import Course from './components/course/Course';
import Card from './components/course/Card';


import axios from 'axios';
axios.defaults.baseURL = `http://localhost:5000/api/`;


const Test = () => <div>User authenticated Success ! You are in DashBoard</div>;

const App = () => {
  const user = useSelector(state => state.user);
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' render={()=> user.currentUser ? <Redirect to = '/dash' /> : <SignupForm /> } />
      <Route path='/tutorsignup' component={TutorSignup} />
      <Route path='/tutor/profile' component={Profile} />
      <Route path='/tutor/dashboard' component={Dashboard} />
      <Route path='/student/dashboard' component={StuDashboard} />
      <Route path='/dash' component={Test} />
      <Route path='/course' component={Course} /> 
      <Route path='/card' component={Card} /> 
      <Route path='*' render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default App;
