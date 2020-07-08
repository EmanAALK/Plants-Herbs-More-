import React from "react";

import { Link } from "react-router-dom";

// Styling
import { ThemeButton, NavStyled } from "../styles";
import logo from "../logo.jpg";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Logo to="/">
            <img src={logo} />
          </Logo>
          <a className="nav-item nav-link" href="#">
            Features
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
<NavBar>
<Link to="/">
Home
</Link>
<Link to="/plants" style={{ margin: 10, float: "right" }}>
Plants
</Link>
</NavBar>


<ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>