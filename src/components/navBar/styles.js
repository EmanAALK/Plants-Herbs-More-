import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavStyling = styled.nav`
  margin-top: 1%;
  text-align: center;
  margin-right: auto;
  margin-left: 40%;
  padding: 0.25em 0.25em;
  font-size: 0.75em;
`;

export const NavHome = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;

  &.active {
    color: ${(props) => props.theme.gold};
    font-weight: bold;
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

export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
`;
