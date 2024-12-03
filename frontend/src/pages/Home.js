import React, { useState, useEffect } from "react";
import {
  fetchDestinations,
  fetchPackages,
  fetchCustomers,
} from "../services/api";
import { Container, Row, Col } from "react-bootstrap";
import DestinationCard from "../components/DestinationCard";
import TravelPackageCard from "../components/TravelPackageCard";
import CustomerCard from "../components/CustomerCard";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchDestinations().then((res) => setDestinations(res.data));
    fetchPackages().then((res) => setPackages(res.data));
    fetchCustomers().then((res) => setCustomers(res.data));
  }, []);

  return (
    <Container>
      <Row>
        {destinations.map((destination) => (
          <Col key={destination.Destination_ID} md={4}>
            <DestinationCard destination={destination} />
          </Col>
        ))}
      </Row>
      <Row>
        {packages.map((packageData) => (
          <Col key={packageData.Package_ID} md={4}>
            <TravelPackageCard packageData={packageData} />
          </Col>
        ))}
      </Row>
      <Row>
        {customers.map((customer) => (
          <Col key={customer.Customer_ID} md={4}>
            <CustomerCard customer={customer} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
