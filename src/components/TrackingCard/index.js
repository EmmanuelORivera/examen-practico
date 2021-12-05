import React from "react";
import * as Styled from "./styled";
import { CardWrapper, DeliveryText, InfoSubtitle } from "../shared";

const TrackingCard = () => {
  return (
    <CardWrapper>
      <Styled.Card>
        <Styled.CardStatusInfo status="delivered">
          <Styled.InfoSubtitleColored status="delivered">
            Servicio ID
          </Styled.InfoSubtitleColored>
          <DeliveryText>3cdef0e2</DeliveryText>

          <Styled.InfoSubtitleColored status="delivered">
            Usuario
          </Styled.InfoSubtitleColored>
          <DeliveryText>Emmanuel Ochoa</DeliveryText>

          <Styled.InfoSubtitleColored status="delivered">
            Estimacion
          </Styled.InfoSubtitleColored>
          <DeliveryText>3 horas</DeliveryText>

          <Styled.InfoSubtitleColored status="delivered">
            Status
          </Styled.InfoSubtitleColored>
          <DeliveryText>Entregado</DeliveryText>
        </Styled.CardStatusInfo>
        <Styled.CardInfo>
          <InfoSubtitle>Servicio Iniciado</InfoSubtitle>
          <DeliveryText>
            2 Dic 2021 <Styled.HourText>10:14 AM</Styled.HourText>
          </DeliveryText>

          <InfoSubtitle>Servicio Finalizado</InfoSubtitle>
          <DeliveryText>
            2 Dic 2021 <Styled.HourText>1:14 PM</Styled.HourText>
          </DeliveryText>

          <InfoSubtitle>Observaciones</InfoSubtitle>
          <DeliveryText style={{ maxWidth: "10.81em" }}>
            El paqute ha sido entregado con exito
          </DeliveryText>
        </Styled.CardInfo>
      </Styled.Card>
    </CardWrapper>
  );
};

export default TrackingCard;
