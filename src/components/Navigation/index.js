import React from "react";
import { ReactComponent as Dashboard } from "../../img/Dashboard.svg";
import { ReactComponent as AboutUs } from "../../img/AboutUs.svg";
import ReactDOM from "react-dom";
import * as Styled from "./styles";

const Navigation = ({ open, setOpen }) => {
  const handleClick = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };
  const content = (
    <Styled.Container open={open}>
      <Styled.UnorderedList>
        <Styled.ListItem>
          <Dashboard />
          <Styled.NewLink to="/" onClick={handleClick}>
            Dashboard
          </Styled.NewLink>
        </Styled.ListItem>
        <Styled.ListItem>
          <AboutUs />
          <Styled.NewLink to="/about" onClick={handleClick}>
            About Us
          </Styled.NewLink>
        </Styled.ListItem>
      </Styled.UnorderedList>
    </Styled.Container>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-container")
  );
};

export default Navigation;
