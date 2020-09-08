import React from "react";
import Image from "react-bootstrap/Image";
import contactus from "../Images/contactus.jpg";
import { Form, Row, Col, Button, Container,Alert, Variant} from "react-bootstrap";
import "../App.css";

export default function Contact() {

  const handleClick = (e) => {
    e.preventDefault()    
    alert("Thank you for your request, We'll contact you soon.")
     let firstName = document.getElementById("firstname")
     let lastName = document.getElementById("lastname")
     let email = document.getElementById("Email")
     let address = document.getElementById("address")
     let note = document.getElementById("note")
     firstName.value=""
     lastName.value=""
     email.value=""
     address.value=""
     note.value=""
 }
  return (
    <Container>
      <Row lg={2} xs={1} md={1}>
        <Col>
          <div className="img">
            <Image style={{width:"80%"}} src={contactus} fluid />
          </div>
        </Col>
        <Col>
          <div>
            <Form className="contactform">
            <Form.Text className="text-muted">Lets sit down and have a cup of coffee.</Form.Text>
              <Form.Label >First name</Form.Label>
              <Form.Control id="firstname" type="text" placeholder="First name" required/>
              <Form.Label>Last name</Form.Label>
              <Form.Control id="lastname"  type="text" placeholder="Last name" />
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="Email"  type="email" placeholder="Enter email" required/>
              </Form.Group>
              <Form.Group type="text" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control id="address" placeholder="1234 Main St" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Note</Form.Label>
                <Form.Control  id="note" as="textarea" rows="3" />
              </Form.Group>
              <Button variant="outline-primary" type="submit" onClick={handleClick}>Submit</Button>{' '}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
