import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
`;

const Backdrop = ({ setOpen }) => {
  const container = (
    <Container onClick={() => setOpen((prevOpen) => !prevOpen)}></Container>
  );
  return ReactDOM.createPortal(container, document.getElementById("backdrop"));
};

export default Backdrop;
