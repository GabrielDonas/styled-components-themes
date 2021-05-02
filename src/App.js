import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { GlobalStyles } from "./global";

import mainTheme from "./MainTheme";
import Header from "./Header";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
