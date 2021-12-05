import React from "react";
import { CardWrapper } from "../../components/shared";
import * as Styled from "./styles";

const DeliveriesSection = () => {
  return (
    <section>
      <Styled.SubTitle>Entregas</Styled.SubTitle>

      <Styled.Input type="text" placeholder="Buscar entregas" />

      <CardWrapper>
        <Styled.Card>
          <Styled.DeliveryInfo>
            <Styled.DeliveryInfoChild>
              <Styled.DeliveryID>ID: 3cdef0e2</Styled.DeliveryID>
              <Styled.DeliveryTitle>Usuario</Styled.DeliveryTitle>
              <Styled.DeliveryText>Emmanuel Ochoa</Styled.DeliveryText>
              <Styled.DeliveryTitle>Repartidor</Styled.DeliveryTitle>
              <Styled.DeliveryText>Juan Pérez</Styled.DeliveryText>
            </Styled.DeliveryInfoChild>
            <Styled.DeliveryInfoChild>
              <Styled.Date>2 Dic 2021</Styled.Date>
              <Styled.DeliveryTitle>Expedidor</Styled.DeliveryTitle>
              <Styled.DeliveryText>Liverpool</Styled.DeliveryText>
              <Styled.DeliveryTitle>Status</Styled.DeliveryTitle>
              <Styled.DeliveryStatus status="inProgress">
                Entregado
              </Styled.DeliveryStatus>
            </Styled.DeliveryInfoChild>
          </Styled.DeliveryInfo>
        </Styled.Card>
      </CardWrapper>
    </section>
  );
};

export default DeliveriesSection;
