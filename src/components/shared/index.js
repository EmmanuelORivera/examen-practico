import styled from "styled-components";

export const TemplateCard = styled.div`
  padding: 1em 0;
  & p {
    margin-bottom: 0.5em;
  }
  @media (min-width: 1000px) {
    min-width: 25.4em;
  }
`;

export const CardWrapper = styled.div`
  display: inline-block;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray["800"]};
  overflow: hidden;
  flex-grow: 1;
  @media (min-width: 1000px) {
    flex-grow: initial;
  }
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
