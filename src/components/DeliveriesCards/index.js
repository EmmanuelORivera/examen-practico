import React, { useState } from "react";
import * as Styled from "./styled";
import { CardWrapper, DeliveryText, InfoSubtitle } from "../shared";

const initialState = {
  deliveries: [
    {
      id: "3cdef0e2",
      user: "Emmanuel Ochoa",
      date: "2 Dic 2021",
      driver: "John Doe",
      shipper: "Liverpool",
      status: { text: "Entregado", code: "delivered" },
      serviceInfo: {
        estimatedArrival: "3 horas",
        serviceStartedHour: "10:14 AM",
        serviceFinishedHour: "1:14PM",
        observations: "El paquete ha sido entregado con exito",
      },
    },
    {
      id: "68c93f29",
      user: "Luis Ochoa",
      date: "2 Dic 2021",
      driver: "Jane Doe",
      shipper: "Sigma",
      status: { text: "Cancelado", code: "canceled" },
      serviceInfo: {
        estimatedArrival: "1 hora",
        serviceStartedHour: "10:14 AM",
        serviceFinishedHour: "10:15 AM",
        observations: "El envio ha sido cancelado por el usuario",
      },
    },
    {
      id: "711b324d",
      user: "Pablo Ochoa",
      date: "2 Dic 2021",
      driver: "Bill Doe",
      shipper: "dportenis",
      status: { text: "En Progreso", code: "inProgress" },
      serviceInfo: {
        estimatedArrival: "2 horas",
        serviceStartedHour: "10:14 AM",
        serviceFinishedHour: "No ha finalizado",
        observations: "Sin observaciones",
      },
    },
  ],
  activeLink: null,
};

const DeliveriesCards = ({ setSelectedCard }) => {
  const [deliveriesInfo, setDeliveriesInfo] = useState(initialState);

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
