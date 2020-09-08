import React from "react";
import { Carousel } from "react-bootstrap";
import cute from '../Images/cute.jpg';
import cute1 from '../Images/cute1.jpg';
import cute2 from '../Images/cute2.jpg';
import "../App.css";

export default function ImageSlide() {
  return (
    <div className= "slide">
      <Carousel>
        <Carousel.Item interval={100}>
          <img
            className="d-block w-100"
            src={cute}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={cute1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cute2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
