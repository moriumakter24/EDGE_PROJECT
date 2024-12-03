import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TravelPackageCard = ({ packageData }) => {
  return (
    <Card className="my-3">
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{packageData.Package_Name}</Card.Title>
        <Card.Text>{packageData.Description}</Card.Text>
        <Link to={`/view-package/${packageData.Package_ID}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default TravelPackageCard;
