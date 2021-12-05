import styled from "styled-components";

export const TemplateCard = styled.div`
  min-width: 25.4em;
  padding: 1em 0;
  & p {
    margin-bottom: 0.5em;
  }
`;

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

export const DeliveryText = styled.p`
  font-size: 0.875rem;
`;

export const InfoSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.palette.gray["900"]};
  font-size: 0.875rem;
  font-weight: 600;
`;
