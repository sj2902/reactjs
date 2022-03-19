import React from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';


function App(){
  return(
    <div className="App">
    <Router>
      <nav>
        <Link to='/signup'>SignUp</Link>
        <br></br>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;







