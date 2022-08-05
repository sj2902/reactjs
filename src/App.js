import React , {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './login';
import SignUp from './signUp';
import Courses from './Courses';
import About from './About';
import Certificate from './Cert';
import WebcamStreamCapture from './Assessment';
import PersistentDrawerRight from './Alphabet';
import PersistentDrawer from './Number';
import Achievements from './Progress';






function App(){
            // const authentication = getAuth();
            // const user = authentication.currentUser;
            
            // const email = user.email;
            const [user, setUser] = useState({});
            
            const [sign, setSign] = useState("");
            

  
  return(
    <div className="App">
      
        
      
      {/* <AuthProvider> */}
      <Router>
        
        <Routes>
          
          <Route exact path="/" element={<Login setUser={setUser} user={user}/>} />
          <Route exact path='/signup' element={<SignUp setUser={setUser} user={user} />} />
          <Route path='/about' element={<About />} />
          <Route exact path='/courses' element={<Courses setUser={setUser} user={user} />}/>
          
          <Route path="/achievements" element={<Achievements setUser={setUser} user={user}/>} />
          <Route path="/certificate" element={<Certificate setUser={setUser} user={user} />} />
          <Route path="/assessment" element={<WebcamStreamCapture setUser={setUser} user={user}   />}  />
          <Route path="/numbers" element={<PersistentDrawer setUser={setUser} user={user} />} />
          <Route path="/alphabets" element={<PersistentDrawerRight setUser={setUser} user={user} />} />
          
          {/* <Route path="/cert" element={<Cert />} /> */}
          
        </Routes>
        {/* </UserContext.Provider> */}
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;














