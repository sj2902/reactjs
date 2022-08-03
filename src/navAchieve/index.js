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

        {/* <NavLink to='/courses'>
           Courses
          </NavLink> */}
        
          <NavBtn>
          <NavBtnLink to='/courses'>Courses</NavBtnLink>
        </NavBtn>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;