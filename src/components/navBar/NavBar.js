import React from "react";

//Buttons
import SignupButton from "../buttons/SignupButton";

// Styling
import { NavHome, NavItem, NavStyling } from "./styles";

const NavBar = () => {
  return (
    <NavStyling className='navbar navbar-expand-lg'>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <NavHome className='nav-item' to='/'>
          <p>Home</p>
        </NavHome>
        <NavItem className='nav-item' to='/vendors'>
          <p> Shops</p>
        </NavItem>
        <NavItem className='nav-item' to='/plants'>
          <p> Products</p>
        </NavItem>
        <SignupButton />
      </div>
    </NavStyling>
  );
};

export default NavBar;
