import React from "react";
import "../App.css";
import blog from "../Images/blog.jpg";
import blog1 from "../Images/blog1.jpg";
import blog2 from "../Images/blog2.jpg";
import { Card, CardDeck } from "react-bootstrap";

export default function Blog() {
  return (
    <div className="blog">
      <CardDeck>
        <Card style={{height:650}}>
          <Card.Img variant="top" src={blog} />
          <Card.Body>
            <Card.Title style={{height: 60}}>What your cat breed says about you.</Card.Title>
            <Card.Text style={{ fontFamily: "Mulish" }}>
              Every once in a while, you might come home from an especially
              hellish day of trying and failing to accomplish the bare minimum,
              only to be faced with an empty, silent apartment. Sure, pets might
              not solve the big problems in your life, but they can definitely
              help with that lonely, icky feeling of a lingering bad day.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 week ago</small>
          </Card.Footer>
        </Card>
        <Card style={{height:650}}>
          <Card.Img variant="top" src={blog1} />
          <Card.Body>
            <Card.Title style={{height: 60}}>Taking dog for bath the first time.</Card.Title>
            <Card.Text style={{ fontFamily: "Mulish" }}>
              The vast expanse of the bathtub is unsettling to some small dogs.
              Avoid giving your tiny dog an existential crisis by using a sink
              instead. He'll feel more contained and secure, and you'll be
              physically closer to him the entire time.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 days ago</small>
          </Card.Footer>
        </Card >
        <Card style={{height:650}}>
          <Card.Img variant="top" src={blog2} />
          <Card.Body>
            <Card.Title style={{height: 60}}>My best friend.</Card.Title>
            <Card.Text style={{ fontFamily: "Mulish" }}>
              Pets, in general, are a man’s best friend, but many pet owners
              inevitably want to get themselves another pet at some time or
              another. But with so much care and attention that you have to give
              your animal friends, it can be a bit tricky to choose whether or
              not you should get a pet and what animal you should get.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 hour ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
