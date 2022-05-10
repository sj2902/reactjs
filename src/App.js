import React from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';
import Courses from './Courses';
import Tutorial from './Tutorial';
import About from './About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Achievements from './Achievements';
import Certificate from './Certificate';
import WebcamStreamCapture from './Assessment';


function App(){
  return(
    <div className="App">
      
      
      <Router>
        
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/tutorial' element={<Tutorial embedId='rtOvBOTyX00'/>} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/assessment" element={<WebcamStreamCapture />} />
          
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;






