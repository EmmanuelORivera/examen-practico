import React from "react";
import InfoCards from "../../../components/InfoCards";
import { CardsWrapper, SubTitle } from "../shared";
const InfoSection = () => {
  return (
    <section>
      <SubTitle>Información</SubTitle>

      <CardsWrapper>
        <InfoCards />
      </CardsWrapper>
    </section>
  );
};

export default InfoSection;
