import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


  
const Navbar = () => {
    
  return (
    <>
      <Nav>
        
  
        <NavMenu>
          <NavLink to='/about' >
            About
          </NavLink>
          
          <NavLink to='/signup' >
            Signup
          </NavLink>

          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;