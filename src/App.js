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
import { UserContext } from './UserContext';
import { useState, useMemo } from 'react';
import {getAuth} from 'firebase/auth';






function App(){
            // const authentication = getAuth();
            // const user = authentication.currentUser;
            
            // const email = user.email;
            
           
  

  

  return(
    <div className="App">
        
      
      
      <Router>
        <UserContext.Provider  value="hello there">
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
          
          
          
        </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;














