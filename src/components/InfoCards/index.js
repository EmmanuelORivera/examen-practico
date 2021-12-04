import React from "react";
import * as Styled from "./styles";
import { CardWrapper } from "../shared";
import { ReactComponent as FlechaArriba } from "../../img/FlechaArriba.svg";
import { ReactComponent as FlechaAbajo } from "../../img/FlechaAbajo.svg";
import { numberToStringPorcentage } from "../../utils/";

const information = [
  { id: 1, title: "Envios Totales", value: 100, porcentage: 5 },
  { id: 2, title: "Viajes del dia", value: 40, porcentage: -12 },
  { id: 3, title: "Envios Pendientes", value: 4, porcentage: -40 },
  { id: 4, title: "Mensajeros Activos", value: 100, porcentage: 9 },
];

const InfoCards = () => {
  return (
    <>
      {information.map((item) => (
        <CardWrapper key={item.id}>
          <Styled.Card>
            <Styled.CardTitle>{item.title}</Styled.CardTitle>
            <Styled.CardInfo>
              <Styled.CardValue>{item.value}</Styled.CardValue>
              <Styled.CardPorcentage porcentage={item.porcentage}>
                {item.porcentage > 0 && <FlechaArriba />}
                {item.porcentage < 0 && <FlechaAbajo />}
                {numberToStringPorcentage(item.porcentage)}
              </Styled.CardPorcentage>
            </Styled.CardInfo>
          </Styled.Card>
        </CardWrapper>
      ))}
    </>
  );
};

export default InfoCards;
