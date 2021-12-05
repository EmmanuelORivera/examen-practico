import React from "react";
import TrackingCard from "../../../components/TrackingCard";
import { ReactComponent as List } from "../../../img/List.svg";
import { SubTitle } from "../shared";
import * as Styled from "./styles";

const isEmptyObject = (object) => Object.entries(object).length === 0;

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

const renderTrackingCard = (selectedCard) => {
  return <TrackingCard selectedCard={selectedCard} />;
};

const TrackingSection = ({ selectedCard }) => {
  return (
    <section>
      <SubTitle>Seguimiento</SubTitle>

      {isEmptyObject(selectedCard)
        ? renderTrackingMessage()
        : renderTrackingCard(selectedCard)}
    </section>
  );
};

export default TrackingSection;
