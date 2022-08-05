import React from 'react';
import {
  Nav,
  NavLink,
  
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import {Link} from "react-router-dom";


  
const Navbar = () => {
    
  return (
    <>
      <Nav>
        
  
        <NavMenu>
          <NavLink to='/about' >
            About
          </NavLink>
          
          <NavLink to='/' >
            Courses
          </NavLink>
          <Link  to={{pathname: "https://forms.gle/cmb9xfjm6FFM4V2J9"}} target="_blank" >Help</Link>

          
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