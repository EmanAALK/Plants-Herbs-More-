import React from "react";

// Styling
import { Logo, NavItem, NavStyling } from "./styles";
import { ThemeButton } from "../../styles";

import { Link } from "react-router-dom";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyling className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <p>LOGO</p>
      </Logo>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <NavItem className="nav-item" to="/plants">
          Plants
        </NavItem>
        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </NavStyling>
  );
};

export default NavBar;
