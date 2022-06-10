import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";


  
const Navbar = () => {
  






  // const querySnapshot = await getDocs(collection(db, "SignUp"));
  // querySnapshot.forEach((doc) => {
  // console.log(`${doc.id} => ${doc.data()}`);
  // });





  
 
  return (
    <>
      <Nav>
        
      
        <NavMenu>
          <NavLink to='/about' >
            About
          </NavLink>
          
          <NavLink to='/achievements' >
            Achievements
          </NavLink>

          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;