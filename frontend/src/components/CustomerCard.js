import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomerCard = ({ customer }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>
          {customer.First_Name} {customer.Last_Name}
        </Card.Title>
        <Card.Text>Phone: {customer.Phone_Number}</Card.Text>
        <Link to={`/view-customer/${customer.Customer_ID}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CustomerCard;
