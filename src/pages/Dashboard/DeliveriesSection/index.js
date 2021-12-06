import React, { useState } from "react";
import DeliveriesCards from "../../../components/DeliveriesCards";
import { CardsWrapper, SubTitle } from "../shared";
import * as Styled from "./styles";

const DeliveriesSection = ({
  deliveriesInfo,
  setDeliveriesInfo,
  setSelectedCard,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section>
      <SubTitle>Entregas</SubTitle>

      <Styled.Input
        type="text"
        placeholder="Buscar entregas por usuario"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <CardsWrapper>
        <DeliveriesCards
          searchTerm={searchTerm}
          deliveriesInfo={deliveriesInfo}
          setDeliveriesInfo={setDeliveriesInfo}
          setSelectedCard={setSelectedCard}
        />
      </CardsWrapper>
    </section>
  );
};

export default DeliveriesSection;
