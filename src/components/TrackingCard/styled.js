import styled from "styled-components";
import { DeliveryStatus } from "../DeliveriesCards/styled";
import { TemplateCard } from "../shared";

export const Card = styled(TemplateCard)`
  display: flex;
  padding: 0;
`;

export const CardStatusInfo = styled.div`
  background: ${({ status, theme }) => {
    if (status === "delivered") return theme.colors.palette.green["100"];
    if (status === "canceled") return theme.colors.palette.red["100"];
    if (status === "inProgress") return theme.colors.palette.blue["100"];
  }};
  padding: 1em;
  min-width: 10em;
`;
export const CardInfo = styled.div`
  padding: 1em;
`;
export const InfoSubtitleColored = styled(DeliveryStatus)`
  padding: 0;
  background: none;
`;

export const HourText = styled.span`
  display: block;
`;
