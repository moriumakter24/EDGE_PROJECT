import React from "react";
import { Form, Button } from "react-bootstrap";

const FormComponent = ({
  formData,
  handleInputChange,
  handleSubmit,
  buttonText,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <Form.Group key={key}>
          <Form.Label>{key.replace(/_/g, " ")}</Form.Label>
          <Form.Control
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      ))}
      <Button variant="primary" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};

export default FormComponent;
