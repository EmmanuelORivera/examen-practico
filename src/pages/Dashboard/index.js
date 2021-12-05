import React from "react";
import DeliveriesSection from "./DeliveriesSection";
import InfoSection from "./InfoSection";
import * as Styled from "./styles";

const Dashboard = () => {
  return (
    <Styled.Container>
      <Styled.Title>Dashboard</Styled.Title>
      <InfoSection />
      <DeliveriesSection />
    </Styled.Container>
  );
};

export default Dashboard;
