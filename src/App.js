import React  from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';
import Courses from './Courses';
import About from './About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Achievements from './Achievements';
import Certificate from './Certificate';
import WebcamStreamCapture from './Assessment';
import PersistentDrawerRight from './Alphabet';
import PersistentDrawer from './Number';
import Timer from './Timer';
import Pathname from "./back-button";
import Submit from "./submitAssessment";





function App(){

  

  return(
    <div className="App">
        
      
      
      <Router>
        
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />}/>
          
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/assessment" element={<WebcamStreamCapture />} />
          <Route path="/numbers" element={<PersistentDrawer />} />
          <Route path="/alphabets" element={<PersistentDrawerRight />} />
          <Route path="/trial" element={<Submit />} />
          
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;














