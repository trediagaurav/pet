import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../App.css";

export default function RegistrationForm() {
  return (
    <div className="regForm">
      <Form>
        <Row>
          <Col>
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text"placeholder="Last name" />
          </Col>
        </Row><br></br>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
