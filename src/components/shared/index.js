import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray["900"]};
  overflow: hidden;
`;

export const MainWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
