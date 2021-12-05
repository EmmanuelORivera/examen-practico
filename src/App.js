import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { MainWrapper } from "./components/shared";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div style={{ minHeight: "100vh" }}>
          <Header />
          <MainWrapper>
            <Routes>
              <Route path="/about" exact element={<About />} />
              <Route path="/" exact element={<Dashboard />} />
            </Routes>
          </MainWrapper>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
