import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
color: ${props=>props.theme.gold};
background-color: ${props=>props.theme.backgroundColor};
}`;

const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
  color: ${props=>props.theme.mainColor};
`;
const Description = styled.h4`
  text-align: center;
  color: ${props=>props.theme.gold};
`;

const ShopImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
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
      color: ${props=>props.theme.gold};
    }
  }
`;

export { Title, Description, ShopImg, ListWrapper, PlantWrapper, GlobalStyle };
