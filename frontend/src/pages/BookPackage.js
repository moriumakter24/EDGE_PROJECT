import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { bookPackage } from "../services/api";

const BookPackage = () => {
  const [formData, setFormData] = useState({
    Customer_ID: "",
    Package_ID: "",
    Booking_Date: "",
    Travel_Date: "",
    Number_of_People: "",
    Total_Cost: "",
  });
  const navigate = useNavigate(); // Use useNavigate here

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookPackage(formData);
      alert("Package booked successfully!");
      navigate("/"); // Use navigate() to redirect
    } catch (error) {
      console.error("Error booking package", error);
    }
  };

  return (
    <Container>
      <h1>Book a Travel Package</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Customer_ID">
          <Form.Label>Customer ID</Form.Label>
          <Form.Control
            type="text"
            name="Customer_ID"
            value={formData.Customer_ID}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Package_ID">
          <Form.Label>Package ID</Form.Label>
          <Form.Control
            type="text"
            name="Package_ID"
            value={formData.Package_ID}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Booking_Date">
          <Form.Label>Booking Date</Form.Label>
          <Form.Control
            type="date"
            name="Booking_Date"
            value={formData.Booking_Date}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Travel_Date">
          <Form.Label>Travel Date</Form.Label>
          <Form.Control
            type="date"
            name="Travel_Date"
            value={formData.Travel_Date}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Number_of_People">
          <Form.Label>Number of People</Form.Label>
          <Form.Control
            type="number"
            name="Number_of_People"
            value={formData.Number_of_People}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Total_Cost">
          <Form.Label>Total Cost</Form.Label>
          <Form.Control
            type="number"
            name="Total_Cost"
            value={formData.Total_Cost}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book Package
        </Button>
      </Form>
    </Container>
  );
};

export default BookPackage;
