import React from "react";
import logo from "../logo.jpg";
//import { Switch } from "react-router";

// Styling
import { Logo, ThemeButton, NavItem } from "../styles";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img alt="logo" src={logo} />
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
        <ul className="navbar-nav mr-auto">
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
  );
};

export default NavBar;
