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
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <MainWrapper>
          <Dashboard />
        </MainWrapper>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
