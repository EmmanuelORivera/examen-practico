import React from "react";
import DeliveriesSection from "./DeliveriesSection";
import InfoSection from "./InfoSection";
import { Container, Title } from "./shared";
import TrackingSection from "./TrackingSection";

const Dashboard = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <InfoSection />
      <DeliveriesSection />
      <TrackingSection />
    </Container>
  );
};

export default Dashboard;
