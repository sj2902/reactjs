import React from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';
import Courses from './Courses';
import Trial from './trial';
import Tutorial from './Tutorial';
import "./tuto_style.css";




function App(){
  return(
    <div className="App">
        {/* <SignUp /> */}
        <Tutorial embedId='rtOvBOTyX00' />
        
      
    {/* <Router>
      <nav>
        <Link to='/signup'>SignUp</Link>
        <br></br>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </Router> */}
    </div>
  );
}

export default App;







