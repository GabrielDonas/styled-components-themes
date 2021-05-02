import styled from "styled-components";

export const MainButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  border: 2px solid palevioletred;
`;
