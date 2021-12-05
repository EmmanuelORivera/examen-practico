import styled from "styled-components";

export const CardWrapper = styled.div`
  display: inline-block;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray["800"]};
  overflow: hidden;
`;

export const MainWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
