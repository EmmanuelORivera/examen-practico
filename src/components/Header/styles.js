import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2.3471em 0;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  width: 5em;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
