import React from 'react';
import './App.css';
import Login from './login';
import SignUp from './signUp';



function App(){
  return(
    <div className="App">
      <SignUp />
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







