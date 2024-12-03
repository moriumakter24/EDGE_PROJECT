import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Tour & Travel
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/add-destination">
            Add Destination
          </Nav.Link>
          <Nav.Link as={Link} to="/add-customer">
            Add Customer
          </Nav.Link>
          <Nav.Link as={Link} to="/add-travel-package">
            Add Package
          </Nav.Link>
          <Nav.Link as={Link} to="/travel-agents">
            Manage Agents
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
