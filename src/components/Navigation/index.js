import React from "react";
import { ReactComponent as Dashboard } from "../../img/Dashboard.svg";
import { ReactComponent as AboutUs } from "../../img/AboutUs.svg";
import ReactDOM from "react-dom";
import * as Styled from "./styles";

const Navigation = ({ open }) => {
  const content = (
    <Styled.Container open={open}>
      <Styled.UnorderedList>
        <Styled.ListItem>
          <Dashboard />
          <Styled.Link href="/#">Dashboard</Styled.Link>
        </Styled.ListItem>
        <Styled.ListItem>
          <AboutUs />
          <Styled.Link href="/#">About Us</Styled.Link>
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
