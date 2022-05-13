import React from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';
import Courses from './Courses';
import PersistentDrawerRight from './Alphabet';
import PersistentDrawer from './Number';
import "./tuto_style.css";




function App(){
  return(
    <div className="App">
        {/* <SignUp /> */}
        <PersistentDrawer />
        
      
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














