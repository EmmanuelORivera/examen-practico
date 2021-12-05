import React from "react";
import * as Styled from "./styled";
import { CardWrapper, DeliveryText, InfoSubtitle } from "../shared";

const TrackingCard = ({ selectedCard }) => {
  console.log(selectedCard);
  return (
    <CardWrapper>
      <Styled.Card>
        <Styled.CardStatusInfo status={selectedCard.status["code"]}>
          <Styled.InfoSubtitleColored status={selectedCard.status["code"]}>
            Servicio ID
          </Styled.InfoSubtitleColored>
          <DeliveryText>{selectedCard.id}</DeliveryText>

          <Styled.InfoSubtitleColored status={selectedCard.status["code"]}>
            Usuario
          </Styled.InfoSubtitleColored>
          <DeliveryText>{selectedCard.user}</DeliveryText>

          <Styled.InfoSubtitleColored status={selectedCard.status["code"]}>
            Estimacion
          </Styled.InfoSubtitleColored>
          <DeliveryText>
            {selectedCard.serviceInfo.estimatedArrival}
          </DeliveryText>

          <Styled.InfoSubtitleColored status={selectedCard.status["code"]}>
            Status
          </Styled.InfoSubtitleColored>
          <DeliveryText>{selectedCard.status["text"]}</DeliveryText>
        </Styled.CardStatusInfo>
        <Styled.CardInfo>
          <InfoSubtitle>Servicio Iniciado</InfoSubtitle>
          <DeliveryText>
            {selectedCard.date}
            <Styled.HourText>
              {selectedCard.serviceInfo.serviceStartedHour}
            </Styled.HourText>
          </DeliveryText>

          <InfoSubtitle>Servicio Finalizado</InfoSubtitle>
          <DeliveryText>
            {selectedCard.date}
            <Styled.HourText>
              {selectedCard.serviceInfo.serviceFinishedHour}
            </Styled.HourText>
          </DeliveryText>

          <InfoSubtitle>Observaciones</InfoSubtitle>
          <DeliveryText style={{ maxWidth: "12.81em" }}>
            {selectedCard.serviceInfo.observations}
          </DeliveryText>
        </Styled.CardInfo>
      </Styled.Card>
    </CardWrapper>
  );
};

export default TrackingCard;
