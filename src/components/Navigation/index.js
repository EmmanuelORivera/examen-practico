import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./styles";

const Navigation = ({ open }) => {
  const content = (
    <Styled.Container open={open}>
      <Styled.UnorderedList>
        <Styled.ListItem>
          <a href="/#">Dashboard</a>
        </Styled.ListItem>
        <Styled.ListItem>
          <a href="/#">About Us</a>
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
