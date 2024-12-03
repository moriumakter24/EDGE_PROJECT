import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../components/Form";
import { insertCustomer } from "../services/api";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    National_ID: "",
    Phone_Number: "",
    Email: "",
    Address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertCustomer(formData); // Use insertCustomer to add the customer
      alert("Customer added successfully!");
    } catch (error) {
      console.error("Error adding customer", error);
    }
  };

  return (
    <Container>
      <h1>Add Customer</h1>
      <FormComponent
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        buttonText="Add Customer"
      />
    </Container>
  );
};

export default AddCustomer;
