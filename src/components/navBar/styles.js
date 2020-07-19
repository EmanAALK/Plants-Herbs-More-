import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 2rem;
  }
`;

export const NavStyling = styled.nav`
  text-align: center;
  p {
    padding: 0.25em 1em;
    font-size: 0.75em;
  }
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;

  &.active {
    color: ${(props) => props.theme.gold};
    font-weight: bold;
  }
`;
