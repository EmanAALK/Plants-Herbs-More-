import React from "react";

// Styling
import { Logo, ThemeButton, NavItem, NavStyling } from "../styles";
import { Link } from "react-router-dom";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyling>
      <nav className="navbar navbar-expand-lg">
        <Logo className="navbar-brand" to="/">
          <p>LOGO</p>
        </Logo>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <Link className="nav-item" to="/">
              Home
            </Link>
            <NavItem className="nav-item" to="/plants">
              Plants
            </NavItem>
            <ThemeButton className="nav-item" onClick={toggleTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </ul>
        </div>
      </nav>
    </NavStyling>
  );
};

export default NavBar;
