import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
      </>
    </ThemeProvider>
  );
};

export default App;
