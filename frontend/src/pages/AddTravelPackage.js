import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import FormComponent from "../components/Form";
import { insertPackage, getDestinations } from "../services/api";

const AddTravelPackage = () => {
  const [formData, setFormData] = useState({
    Package_Name: "",
    Destination_ID: "",
    Duration_Days: "",
    Price: "",
    Description: "",
  });
  const [destinations, setDestinations] = useState([]);

  // Fetch destinations when the component mounts
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const destinationsData = await getDestinations();
        console.log("Fetched destinations data:", destinationsData); // Log data for inspection
        setDestinations(destinationsData.destinations || []); // Handle cases where it's not an array
      } catch (error) {
        console.error("Error fetching destinations", error);
      }
    };
    fetchDestinations();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertPackage(formData);
      alert("Travel Package added successfully!");
    } catch (error) {
      console.error("Error adding travel package", error);
    }
  };

  return (
    <Container>
      <h1>Add Travel Package</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Package_Name">
          <Form.Label>Package Name</Form.Label>
          <Form.Control
            type="text"
            name="Package_Name"
            value={formData.Package_Name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Destination_ID">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            as="select"
            name="Destination_ID"
            value={formData.Destination_ID}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a destination</option>
            {/* Check if destinations is an array and has elements before calling .map */}
            {Array.isArray(destinations) && destinations.length > 0 ? (
              destinations.map((destination) => (
                <option key={destination.id} value={destination.id}>
                  {destination.name}
                </option>
              ))
            ) : (
              <option value="">No destinations available</option>
            )}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Duration_Days">
          <Form.Label>Duration (Days)</Form.Label>
          <Form.Control
            type="number"
            name="Duration_Days"
            value={formData.Duration_Days}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="Price"
            value={formData.Price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        {/* Reuse the FormComponent here */}
        <FormComponent
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText="Add Travel Package"
        />
      </Form>
    </Container>
  );
};

export default AddTravelPackage;
