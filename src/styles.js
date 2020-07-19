import styled, { createGlobalStyle } from "styled-components";

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const GlobalStyle = createGlobalStyle`
body{
  margin: 30px;
  margin-top: 15px;
color: ${(props) => props.theme.gold};
background-color: ${(props) => props.theme.backgroundColor};
}`;

export const PlusCircle = styled.button`
  size: 4em;
  float: right;
`;

export const ThemeButton = styled.button`
  align-items: left;
  font-size: 0.75em;
  margin: 20px;
  padding: 0.25em 0.5em;
  border-radius: 4px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
