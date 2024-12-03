import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getAgents } from "../services/api"; // Assuming this is the API service for fetching agents
import { Link } from "react-router-dom";

const TravelAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await getAgents();
        console.log("Fetched agents data:", response); // Log the full response object

        // Ensure the correct access to the data
        const agentsData = response.data; // Axios returns a full response object, so access `data`

        // Directly set the agents array from the response
        if (Array.isArray(agentsData)) {
          setAgents(agentsData); // If the data is an array, set it directly
        } else {
          console.error("Expected an array of agents but got:", agentsData);
        }
      } catch (error) {
        console.error("Error fetching agents", error);
      }
    };

    fetchAgents(); // Call the function to fetch agents data when the component mounts
  }, []);

  return (
    <Container>
      <h1>Travel Agents</h1>
      <Row>
        {agents.length > 0 ? (
          // Render the list of agents if there are any
          agents.map((agent) => (
            <Col key={agent.AGENT_ID} md={4}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{agent.AGENT_NAME}</h5>
                  <p className="card-text">Phone: {agent.PHONE_NUMBER}</p>
                  <p className="card-text">Email: {agent.EMAIL}</p>
                  <p className="card-text">
                    Assigned Destination ID: {agent.ASSIGNED_DESTINATION}
                  </p>
                  <Link to={`/edit-agent/${agent.AGENT_ID}`}>
                    <Button variant="primary">Edit Agent</Button>
                  </Link>
                </div>
              </div>
            </Col>
          ))
        ) : (
          // If no agents are available, show a message
          <p>No agents available.</p>
        )}
      </Row>
    </Container>
  );
};

export default TravelAgents;
