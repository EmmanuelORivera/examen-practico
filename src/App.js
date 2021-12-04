import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
