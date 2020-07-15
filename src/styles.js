import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
//import { Switch } from "react-router";

export const CreateButtonStyled = styled.button`
color: ${(props) => props.theme.backgroundColor};
background-color: ${(props) => props.theme.mainColor};
&:hover {
  color: ${(props) => props.theme.mainColor}
  background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const DetailWrapper = styled.div`
  img {
    width: 200px;
    height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  p {
    text-align: center;
    font-size: 25px;
  }
`;

export const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.gold};
`;

export const GlobalStyle = createGlobalStyle`
body{
  margin: 40px;
color: ${(props) => props.theme.gold};
background-color: ${(props) => props.theme.backgroundColor};
}`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 2rem;
  }
`;
export const NavStyling = styled.p`
  text-align: center;
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.gold};
    font-weight: bold;
  }
`;

export const PlantWrapper = styled.div`
  margin: 20px;

  img {
    width: 100px;
    height: 130px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  p {
    text-align: center;

    &.plant-price {
      color: ${(props) => props.theme.gold};
    }
  }
`;

export const PlusCircle = styled.button`
  size="4em";
  float: right;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
`;

export const ThemeButton = styled.button`
  align-items: left;
  font-size: 1em;
  margin: 20px;
  padding: 0.25em 1em;
  border-radius: 4px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  margin-top: 40;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const ListWrapper = styled.div`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.gold};
`;
