import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getDestinations, deleteDestination } from "../services/api";
import { Link } from "react-router-dom";

const ViewDestination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const destinationsData = await getDestinations();
        setDestinations(destinationsData);
      } catch (error) {
        console.error("Error fetching destinations", error);
      }
    };
    fetchDestinations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDestination(id);
      setDestinations(
        destinations.filter((destination) => destination.Destination_ID !== id)
      );
      alert("Destination deleted successfully!");
    } catch (error) {
      console.error("Error deleting destination", error);
    }
  };

  return (
    <Container>
      <h1>View Destinations</h1>
      <Row>
        {destinations.map((destination) => (
          <Col key={destination.Destination_ID} md={4}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{destination.Destination_Name}</h5>
                <p className="card-text">{destination.Description}</p>
                <p className="card-text">Location: {destination.Location}</p>
                <p className="card-text">
                  Popularity Rating: {destination.Popularity_Rating}
                </p>
                <Link to={`/edit-destination/${destination.Destination_ID}`}>
                  <Button variant="primary">Edit Destination</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(destination.Destination_ID)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ViewDestination;
