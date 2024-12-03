import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  return (
    <Card className="my-3">
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{destination.Destination_Name}</Card.Title>
        <Card.Text>{destination.Description}</Card.Text>
        <Link to={`/view-destination/${destination.Destination_ID}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DestinationCard;
