import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 1em;
  min-width: 11.68em;
  padding: 1.125em;
`;

export const CardTitle = styled.div`
  font-weight: 500;
`;

export const CardInfo = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-around;
  align-items: center;
`;

export const CardValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CardPorcentage = styled.div`
  align-items: center;
  color: ${({ theme, porcentage }) => {
    return porcentage > 0
      ? theme.colors.palette.green["900"]
      : theme.colors.palette.red["900"];
  }};
  display: flex;
  font-weight: 500;
  font-size: 0.875rem;
  gap: 5px;
`;
