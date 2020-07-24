import styled, { createGlobalStyle } from "styled-components";

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Description = styled.h4`
  text-align: center;
  margin-bottom: 1%;
  margin-right: 6%;
  font-size: 1em;
  word-spacing: 4px;
  color: ${(props) => props.theme.gold};
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerText};
  text-align: center;

  h5 {
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 1%;
    font-size: 20%;
    text-align: left;
    letter-spacing: 2px;
  }
`;

export const GlobalStyle = createGlobalStyle`
body{
  margin: 30px;
  margin-top: 15px;
color: ${(props) => props.theme.gold};
background-color: ${(props) => props.theme.backgroundColor};
}`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: white;
  color: ${(props) => props.theme.mainColor};
`;

export const ThemeButton = styled.button`
  align-content: right;
  align-self: right;
  align-items: right;
  float: right;
  font-size: 0.75em;
  margin: 20px;
  padding: 0.25em 0.3em;
  border-radius: 4px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  margin-top: 2%;
  margin-bottom: 1%;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;
