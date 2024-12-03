import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../components/Form";
import { insertDestination } from "../services/api";

const AddDestination = () => {
  const [formData, setFormData] = useState({
    Destination_Name: "",
    Location: "",
    Description: "",
    Popularity_Rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertDestination(formData); // Use insertDestination here
      alert("Destination added successfully!");
    } catch (error) {
      console.error("Error adding destination", error);
    }
  };

  return (
    <Container>
      <h1>Add Destination</h1>
      <FormComponent
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        buttonText="Add Destination"
      />
    </Container>
  );
};

export default AddDestination;
