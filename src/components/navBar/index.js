import React from "react";
import { observer } from "mobx-react";

//Buttons
// import SignupButton from "../Buttons/SignupButton";
// import SigninButton from "../Buttons/SigninButton";

//Stores
import authStore from "../../stores/authStore";
import { FiLogOut } from "react-icons/fi";

// Styles
import { NavHome, NavItem, NavStyling, UsernameStyled } from "./styles";

const NavBar = () => {
  return (
    <NavStyling className='navbar navbar-expand-lg'>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <NavHome className='nav-item' to='/'>
          <p>Home</p>
        </NavHome>
        <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
          {authStore.user && (
            <>
              <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
              <FiLogOut onClick={authStore.signout} size='2em' color='red' />
            </>
          )}
          {authStore.user?.role === "admin" && (
            <>
              <NavItem className='nav-item' to='/vendors'>
                <p> Shops</p>
              </NavItem>
              <NavItem className='nav-item' to='/plants'>
                <p> Products</p>
              </NavItem>
            </>
          )}
          {/* <SignupButton />
          <SigninButton /> */}
        </ul>
      </div>
    </NavStyling>
  );
};

export default observer(NavBar);
