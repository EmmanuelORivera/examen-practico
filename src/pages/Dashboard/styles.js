import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.75em;
`;
export const Title = styled.h1`
  font-size: 1.25rem;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  margin: 2em 0;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.31em;
  justify-content: space-between;
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.palette.gray["800"]};
  outline: none;
  width: 100%;
`;

export const Card = styled.div`
  min-width: 26.4em;
  padding: 1em 0;

  & p {
    margin-bottom: 0.5em;
  }
`;

export const DeliveryID = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.palette.gray["900"]};
  font-size: 0.875rem;
`;

export const DeliveryInfo = styled.div`
  div:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.palette.gray["800"]};
  }
  display: flex;
  justify-content: space-around;
`;

export const DeliveryInfoChild = styled.div`
  p:last-child {
    margin-bottom: 0;
  }
`;
export const DeliveryTitle = styled.p`
  color: ${({ theme }) => theme.colors.palette.gray["900"]};
  font-size: 0.875rem;
  font-weight: 600;
`;

export const DeliveryText = styled.p`
  font-size: 0.875rem;
`;
export const DeliveryStatus = styled(DeliveryText)`
  color: ${({ status, theme }) => {
    if (status === "delivered") return theme.colors.palette.green["900"];
    if (status === "cancel") return theme.colors.palette.red["900"];
    if (status === "inProgress") return theme.colors.palette.blue["900"];
  }};
  border-radius: 8px;
  font-weight: 600;
  padding: 0.2em 0.5em;
  background: ${({ status, theme }) => {
    if (status === "delivered") return theme.colors.palette.green["100"];
    if (status === "cancel") return theme.colors.palette.red["100"];
    if (status === "inProgress") return theme.colors.palette.blue["100"];
  }};
`;
