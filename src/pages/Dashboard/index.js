import React, { useState } from "react";
import DeliveriesSection from "./DeliveriesSection";
import InfoSection from "./InfoSection";
import { Container, Title } from "./shared";
import TrackingSection from "./TrackingSection";
import initialState from "./data";

const Dashboard = () => {
  const [deliveriesInfo, setDeliveriesInfo] = useState(initialState);
  const [selectedCard, setSelectedCard] = useState({});
  return (
    <Container>
      <Title>Dashboard</Title>
      <InfoSection />
      <DeliveriesSection
        deliveriesInfo={deliveriesInfo}
        setDeliveriesInfo={setDeliveriesInfo}
        setSelectedCard={setSelectedCard}
      />
      <TrackingSection selectedCard={selectedCard} />
    </Container>
  );
};

export default Dashboard;
