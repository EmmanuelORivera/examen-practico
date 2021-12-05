import styled from "styled-components";

export const TrackingMessage = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  color: ${({ theme }) => theme.colors.palette.gray["900"]};
`;
export const TrackingText = styled.p`
  max-width: 12.25em;
`;
