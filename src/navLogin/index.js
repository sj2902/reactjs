import React from 'react';
import {
  Nav,
  NavLink,
  
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
          
          <NavLink to='/' >
            Login
          </NavLink>

          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;