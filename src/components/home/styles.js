import styled from "styled-components";

export const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.gold};
`;

export const ShopImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
`;

export const Title = styled.h1`
  margin-top: 40;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;
