import React from "react";
import DeliveriesCards from "../../../components/DeliveriesCards";
import { CardsWrapper, SubTitle } from "../shared";
import * as Styled from "./styles";

const DeliveriesSection = ({ setSelectedCard }) => {
  return (
    <section>
      <SubTitle>Entregas</SubTitle>

      <Styled.Input type="text" placeholder="Buscar entregas" />

      <CardsWrapper>
        <DeliveriesCards setSelectedCard={setSelectedCard} />
      </CardsWrapper>
    </section>
  );
};

export default DeliveriesSection;
