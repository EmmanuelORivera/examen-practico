import React from "react";
import * as Styled from "./styled";
import { CardWrapper, DeliveryText, InfoSubtitle } from "../shared";

const DeliveriesCards = ({
  deliveriesInfo,
  setDeliveriesInfo,
  setSelectedCard,
}) => {
  const handleClick = (item) => {
    setSelectedCard(item);
    setDeliveriesInfo((prevDeliveriesInfo) => ({
      ...prevDeliveriesInfo,
      activeLink: item.id,
    }));
  };

  return (
    <>
      {deliveriesInfo.deliveries.map((item) => (
        <CardWrapper key={item.id}>
          <Styled.Card
            onClick={() => handleClick(item)}
            activeLink={
              item.id === deliveriesInfo.activeLink ? "active" : "inactive"
            }
          >
            <Styled.DeliveryInfo>
              <Styled.DeliveryInfoChild>
                <Styled.DeliveryID>ID: {item.id}</Styled.DeliveryID>
                <InfoSubtitle>Usuario</InfoSubtitle>
                <DeliveryText>{item.user}</DeliveryText>
                <InfoSubtitle>Repartidor</InfoSubtitle>
                <DeliveryText>{item.driver}</DeliveryText>
              </Styled.DeliveryInfoChild>
              <Styled.DeliveryInfoChild>
                <Styled.Date>{item.date}</Styled.Date>
                <InfoSubtitle>Expedidor</InfoSubtitle>
                <DeliveryText>{item.shipper}</DeliveryText>
                <InfoSubtitle>Status</InfoSubtitle>
                <Styled.DeliveryStatus status={item.status["code"]}>
                  {item.status["text"]}
                </Styled.DeliveryStatus>
              </Styled.DeliveryInfoChild>
            </Styled.DeliveryInfo>
          </Styled.Card>
        </CardWrapper>
      ))}
    </>
  );
};

export default DeliveriesCards;
