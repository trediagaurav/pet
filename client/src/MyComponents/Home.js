import React from "react";
import "../App.css";
import cute from "../Images/cute.jpg";
import Image from "react-bootstrap/Image";
import Logo from "../Components/Logo";
import ImageSlide from "../Components/ImageSlide";
import RegistrationForm from "../Components/RegistrationForm";
import Blog from "../Components/Blog";
import { Row, Container, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div className="logo">
        <Logo />
        <h1 style={{ color: "white" }}>PAC - Pet Adoption Center</h1>
      </div>
      <br></br>
      <Container>
        <div>
          <ImageSlide />
        </div>
      </Container>
      <div>
        <Blog />
      </div>
    </div>
  );
}
