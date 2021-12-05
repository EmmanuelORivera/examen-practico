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
  @media (min-width: 470px) {
    width: 40%;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.2em;
  padding: 2rem 0;
`;

export const Link = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  text-decoration: none;
`;
