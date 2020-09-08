import React, { Component } from "react";
import "../App.css";
import { Card, Button, Col, Image, Alert } from "react-bootstrap";
import "../DogList.css";
import blogform2 from "../Images/blogform2.jpg";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

export default class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [] };
    console.log(this.props.user);
  }

  handleClick = (e) => {
    console.log(this.props.user);
    let obj = {};
    obj.e = e;
    obj.user = this.props.user;
    console.log(obj);
    const { dogs } = this.state;
    if (!dogs.some((ziv) => ziv.id == e.id)) {
      this.setState({ dogs: [...this.state.dogs, e] });
    }
    fetch("http://localhost:3001/favorite/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].id);
        const dog = this.state.dogs.filter((dog) => dog.id !== data[0].id);
        console.log(dog);
        this.setState({ dogs: dog });
        console.log(dog);
        this.adoptAlert();
      });
    this.adoptAlert = () => {
      alert("Thank you for adopting and giving a new life")
    };  
  };

  deleteClick = (e) => {
    console.log(this.props.user);
    let obj = {};
    obj.e = e;
    obj.user = this.props.user;
    console.log(obj);
    const { dogs } = this.state;
    if (!dogs.some((ziv) => ziv.id == e.id)) {
      this.setState({ dogs: [...this.state.dogs, e] });
    }
    fetch("http://localhost:3001/favorite/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].id);
        const dog = this.state.dogs.filter((dog) => dog.id !== data[0].id);
        console.log(dog);
        this.setState({ dogs: dog });
        console.log(dog);
      });
  };
  componentDidMount() {
    console.log("Working");
    fetch("http://localhost:3001/favorite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.props.user),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dogs: data });
        console.log(this.state.dogs);
      });
  }

  render() {
    const dogList = this.state.dogs.length ? (
      this.state.dogs.map((dog) => {
        return (
          <div className="dogList">
            <Col lg={3} xs={12} md={6}>
              <div style={{ height: 650 }}>
                <Card
                  className="card"
                  style={{ width: "15rem", "text-align": "center" }}
                >
                  <Card.Img
                    style={{ height: 200, width: 300 }}
                    variant="top"
                    src={dog.image}
                  />
                  <Card.Body style={{ padding: "6px 8px" }}>
                    <Card.Title style={{ height: 70 }}>
                      Ref:{dog.ref}
                    </Card.Title>
                    <Card.Text>
                      <p>Height:{dog.height}</p>
                      <p>Weight:{dog.width}</p>
                    </Card.Text>
                    <Button
                      onClick={() => this.handleClick(dog)}
                      variant="outline-success"
                    >
                      Adopt
                    </Button>{" "}
                    <Button
                      onClick={() => this.deleteClick(dog)}
                      variant="outline-danger"
                    >
                      Delete
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>
        );
      })
    ) : (
      <div>
        <h2>No dogs in the favorite</h2>
      </div>
    );
    return (
      <div>
        <div className="servicepic">
          <Image src={blogform2} fluid />
        </div>
        <br></br>
        <div className="dogList">{dogList}</div>
      </div>
    );
  }
}
