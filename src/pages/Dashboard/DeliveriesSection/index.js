import React from "react";
import DeliveriesCards from "../../../components/DeliveriesCards";
import { CardsWrapper, SubTitle } from "../shared";
import * as Styled from "./styles";

const DeliveriesSection = ({
  deliveriesInfo,
  setDeliveriesInfo,
  setSelectedCard,
}) => {
  return (
    <section>
      <SubTitle>Entregas</SubTitle>

      <Styled.Input type="text" placeholder="Buscar entregas" />

      <CardsWrapper>
        <DeliveriesCards
          deliveriesInfo={deliveriesInfo}
          setDeliveriesInfo={setDeliveriesInfo}
          setSelectedCard={setSelectedCard}
        />
      </CardsWrapper>
    </section>
  );
};

export default DeliveriesSection;
