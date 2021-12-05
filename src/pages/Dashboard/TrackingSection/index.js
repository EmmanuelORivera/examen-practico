import React from "react";
import { ReactComponent as List } from "../../../img/List.svg";
import { SubTitle } from "../shared";
import * as Styled from "./styles";

const isEmptyObject = (selectedCard) =>
  Object.entries(selectedCard).length === 0;

const renderTrackingMessage = () => {
  return (
    <Styled.TrackingMessage>
      <List />
      <Styled.TrackingText>
        Selecciona una entrega para ver su seguimiento
      </Styled.TrackingText>
    </Styled.TrackingMessage>
  );
};

const renderTrackingCard = () => {
  return <h1>Some dummy text</h1>;
};

const TrackingSection = ({ selectedCard }) => {
  return (
    <section>
      <SubTitle>Seguimiento</SubTitle>

      {isEmptyObject(selectedCard)
        ? renderTrackingMessage()
        : renderTrackingCard()}
    </section>
  );
};

export default TrackingSection;
