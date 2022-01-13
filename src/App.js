import React from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';

// import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App(){
  return(
    // <Router>    
      <div className="App">
        <SignUp />
        <Login />
      </div>
    // </Router>
  );
}

export default App;







