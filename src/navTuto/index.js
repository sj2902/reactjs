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
          
          <NavLink to='/courses' >
            Courses
          </NavLink>

          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;