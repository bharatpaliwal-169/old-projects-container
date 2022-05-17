import React from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './Routes';


function App() {
  return (

    <Router>
        <BaseRouter />
    </Router>
  );
}

export default App;
