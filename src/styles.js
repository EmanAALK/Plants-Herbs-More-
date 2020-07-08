import styled, { createGlobalStyle } from "styled-components";

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.gold};
`;

export const GlobalStyle = createGlobalStyle`
body{
color: ${(props) => props.theme.gold};
background-color: ${(props) => props.theme.backgroundColor};
}`;

export const NavStyled = styled.nav`
  margin: 10;
  float: right;
`;

export const PlantWrapper = styled.div`
  margin: 20px;

  img {
    width: 100px;
    height: 130px;
  }

  p {
    text-align: center;

    &.plant-price {
      color: ${(props) => props.theme.gold};
    }
  }
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
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 4px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const ListWrapper = styled.div`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
