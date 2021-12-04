import React from "react";
import * as Styled from "./styles";
import InfoCards from "../../components/InfoCards";
const InfoSection = () => {
  return (
    <section>
      <Styled.SubTitle>Información</Styled.SubTitle>

      <Styled.CardsWrapper>
        <InfoCards />
      </Styled.CardsWrapper>
    </section>
  );
};

export default InfoSection;
