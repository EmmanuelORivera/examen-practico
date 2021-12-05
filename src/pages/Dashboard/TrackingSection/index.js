import React from "react";
import { ReactComponent as List } from "../../../img/List.svg";
import { SubTitle } from "../shared";
import * as Styled from "./styles";
const TrackingSection = () => {
  return (
    <section>
      <SubTitle>Seguimiento</SubTitle>

      <Styled.TrackingMessage>
        <List />
        <Styled.TrackingText>
          Selecciona una entrega para ver su seguimiento
        </Styled.TrackingText>
      </Styled.TrackingMessage>
    </section>
  );
};

export default TrackingSection;
