import React from "react";
import styled from "styled-components";

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.black};
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <Container open={open} onClick={() => setOpen((prevOpen) => !prevOpen)}>
      <div />
      <div />
      <div />
    </Container>
  );
};

export default HamburgerMenu;
