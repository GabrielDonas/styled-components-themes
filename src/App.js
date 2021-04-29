import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import TextBox from "./TextBox";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
`;

Button.defaultProps = {
  theme: {
    bg: "black",
    color: "white",
  },
};

const night = {
  bg: "white",
  color: "black",
};

function App() {
  return (
    <div>
      <Button>Default Theme</Button>
      <ThemeProvider theme={night}>
        <Button>Dark Theme</Button>
        <TextBox></TextBox>
      </ThemeProvider>
      <TextBox></TextBox>
    </div>
  );
}

export default App;
