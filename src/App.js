import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [title, setTitle] = useState("It's a light theme!");

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setTitle("It's a dark theme!");
      // otherwise, it should be light
    } else {
      setTheme(lightTheme);
      setTitle("It's a light theme!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>{title}</h1>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
