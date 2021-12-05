import styled from "styled-components";
import { DeliveryText, TemplateCard } from "../shared";

export const Card = styled(TemplateCard)`
  cursor: pointer;
  background: ${({ activeLink, theme }) =>
    activeLink === "active" && theme.colors.background};

  &:hover {
    background: ${({ theme }) => theme.colors.background};
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
    padding-right: 3em;
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

export const DeliveryStatus = styled(DeliveryText)`
  color: ${({ status, theme }) => {
    if (status === "delivered") return theme.colors.palette.green["900"];
    if (status === "canceled") return theme.colors.palette.red["900"];
    if (status === "inProgress") return theme.colors.palette.blue["900"];
  }};
  border-radius: 8px;
  font-weight: 600;
  padding: 0.2em 0.5em;
  background: ${({ status, theme }) => {
    if (status === "delivered") return theme.colors.palette.green["100"];
    if (status === "canceled") return theme.colors.palette.red["100"];
    if (status === "inProgress") return theme.colors.palette.blue["100"];
  }};
`;
