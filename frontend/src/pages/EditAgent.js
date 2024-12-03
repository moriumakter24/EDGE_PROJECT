import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../components/Form";
import { fetchAgents, updateAgent } from "../services/api";
import { useParams } from "react-router-dom";

const EditAgent = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    Agent_Name: "",
    Phone_Number: "",
    Email: "",
    Assigned_Destination: "",
    Salary: "",
    Joining_Date: "",
  });

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const agents = await fetchAgents();
        const agent = agents.find((a) => a.id === id); // Find the agent by ID
        setFormData(agent); // Populate form with agent data
      } catch (error) {
        console.error("Error fetching agent", error);
      }
    };

    fetchAgent();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAgent(id, formData);
      alert("Agent updated successfully!");
    } catch (error) {
      console.error("Error updating agent", error);
    }
  };

  return (
    <Container>
      <h1>Edit Agent</h1>
      <FormComponent
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        buttonText="Update Agent"
      />
    </Container>
  );
};

export default EditAgent;
