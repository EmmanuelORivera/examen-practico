import React from "react";
import DeliveriesCards from "../../components/DeliveriesCards";
import * as Styled from "./styles";

const DeliveriesSection = () => {
  return (
    <section>
      <Styled.SubTitle>Entregas</Styled.SubTitle>

      <Styled.Input type="text" placeholder="Buscar entregas" />

      <Styled.CardsWrapper>
        <DeliveriesCards />
      </Styled.CardsWrapper>
    </section>
  );
};

export default DeliveriesSection;
