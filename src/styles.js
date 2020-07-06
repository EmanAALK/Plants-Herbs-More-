import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
color: ${(props) => props.theme.gold};
background-color: ${(props) => props.theme.backgroundColor};
}`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 4px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;
const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.gold};
`;

const ShopImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const DetailWrapper = styled.div`
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

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const PlantWrapper = styled.div`
  margin: 20px;

  img {
    width: 80px;
    hight: 90px;
  }

  p {
    text-align: center;

    &.plant-price {
      color: ${(props) => props.theme.gold};
    }
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export {
  GlobalStyle,
  DetailWrapper,
  ThemeButton,
  Title,
  Description,
  ShopImg,
  ListWrapper,
  PlantWrapper,
};
