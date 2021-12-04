import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 70%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 100%;
  justify-content: center;
`;

export const ListItem = styled.li`
  padding: 2rem 0;
`;
