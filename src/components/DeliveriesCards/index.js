import React, { useState } from "react";
import * as Styled from "./styled";
import { CardWrapper } from "../shared";

const initialState = {
  deliveries: [
    {
      id: "3cdef0e2",
      user: "Emmanuel Ochoa",
      date: "2 Dic 2021",
      driver: "John Doe",
      shipper: "Liverpool",
      status: { text: "Entregado", code: "delivered" },
    },
    {
      id: "68c93f29",
      user: "Luis Ochoa",
      date: "2 Dic 2021",
      driver: "Jane Doe",
      shipper: "Sigma",
      status: { text: "Cancelado", code: "canceled" },
    },
    {
      id: "711b324d",
      user: "Pablo Ochoa",
      date: "2 Dic 2021",
      driver: "Bill Doe",
      shipper: "dportenis",
      status: { text: "En Progreso", code: "inProgress" },
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
                <Styled.DeliveryTitle>Usuario</Styled.DeliveryTitle>
                <Styled.DeliveryText>{item.user}</Styled.DeliveryText>
                <Styled.DeliveryTitle>Repartidor</Styled.DeliveryTitle>
                <Styled.DeliveryText>{item.driver}</Styled.DeliveryText>
              </Styled.DeliveryInfoChild>
              <Styled.DeliveryInfoChild>
                <Styled.Date>{item.date}</Styled.Date>
                <Styled.DeliveryTitle>Expedidor</Styled.DeliveryTitle>
                <Styled.DeliveryText>{item.shipper}</Styled.DeliveryText>
                <Styled.DeliveryTitle>Status</Styled.DeliveryTitle>
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
