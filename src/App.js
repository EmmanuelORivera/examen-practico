import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { MainWrapper } from "./components/shared";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <MainWrapper>
        <Dashboard />
      </MainWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
