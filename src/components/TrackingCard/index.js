import React from "react";
import * as Styled from "./styled";
import { CardWrapper } from "../shared";

const TrackingCard = () => {
  return (
    <CardWrapper>
      <Styled.Card>
        <div>
          <p>Servicio ID</p>
          <p>3cdef0e2</p>

          <p>Usuario</p>
          <p>Emmanuel Ochoa</p>

          <p>Estimacion</p>
          <p>3 horas</p>

          <p>Status</p>
          <p>Entregado</p>
        </div>
        <div>
          <p>Servicio Iniciado</p>
          <p>
            2 Dic 2021 <span>10:14 AM</span>
          </p>

          <p>Servicio Finalizado</p>
          <p>
            2 Dic 2021 <span>1:14 PM</span>
          </p>

          <p>Observaciones</p>
          <p>El paqute ha sido entregado con exito</p>
        </div>
      </Styled.Card>
    </CardWrapper>
  );
};

export default TrackingCard;
