import styled from "styled-components";

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.gold};
  color: ${(props) => props.theme.gold};
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const PlusCircle = styled.div`
  size: 4em;
  margin-top: 2px;
  margin-right: 200px;
  float: right;
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.gold};
`;
