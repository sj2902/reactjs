import React , {useState} from 'react';
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
// import { UserContext } from './UserContext';
// import { useState, useMemo } from 'react';
import {getAuth} from 'firebase/auth';






function App(){
            // const authentication = getAuth();
            // const user = authentication.currentUser;
            
            // const email = user.email;
            const [user, setUser] = useState({});
            
            const [sign, setSign] = useState("");
            

  
  return(
    <div className="App">
      
        
      
      
      <Router>
        {/* <UserContext.Provider  value="hello there"> */}
        <Routes>
          
          <Route path="/" element={<Login setUser={setUser} user={user}/>} />
          <Route path='/signup' element={<SignUp setUser={setUser} user={user} />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses setUser={setUser} user={user} />}/>
          
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/certificate" element={<Certificate setUser={setUser} user={user} />} />
          <Route path="/assessment" element={<WebcamStreamCapture setUser={setUser} user={user}   />}  />
          <Route path="/numbers" element={<PersistentDrawer setUser={setUser} user={user} />} />
          <Route path="/alphabets" element={<PersistentDrawerRight setUser={setUser} user={user} />} />
          
          
          
        </Routes>
        {/* </UserContext.Provider> */}
      </Router>
    </div>
  );
}

export default App;














