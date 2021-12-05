import React, { useState } from "react";
import DeliveriesSection from "./DeliveriesSection";
import InfoSection from "./InfoSection";
import { Container, Title } from "./shared";
import TrackingSection from "./TrackingSection";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState({});
  return (
    <Container>
      <Title>Dashboard</Title>
      <InfoSection />
      <DeliveriesSection setSelectedCard={setSelectedCard} />
      <TrackingSection selectedCard={selectedCard} />
    </Container>
  );
};

export default Dashboard;
