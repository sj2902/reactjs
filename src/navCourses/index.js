import React from 'react';

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import { 
  getAuth,
  signOut 
} from 'firebase/auth';

import { Button } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

import {app} from "../firebase";

  
const Navbar = () => {
  const navigate = useNavigate();

  const logout = async(e) => {
    const authentication = getAuth();
    e.preventDefault();

    signOut(authentication)
      .then(()=>{
        console.log("the user signed out");
        navigate("/login");

      })
      .catch((err) => {
        console.log(err.message);
      })
  }
  
 
  return (
    <>
      <Nav>
        
      
        <NavMenu>
          <NavLink to='/about' >
            About
          </NavLink>
          
          {/* <NavLink to='/achievements' >
            Achievements
          </NavLink> */}

          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/' >
            
              Log Out
            
          </NavBtnLink>
        </NavBtn> */}
        <Button onClick={logout}>
          Log Out
        </Button>
      </Nav>
    </>
  );
};
  
export default Navbar;