import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import "../DogList.css";
import "../App.css";
import Adoptus from "../Images/Adoptus.jpg";
import Image from "react-bootstrap/Image";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      favorites:[]
    };
    console.log(this.props.user)
  }

  
  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/images/search?limit=50")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);        
        this.setState({ dogs: data });
        console.log(this.state.dogs)
      });
  }
  
  
  handleClick = (e) => {
    console.log(this.props.user)
    let obj ={};
    obj.e = e;
    obj.user = this.props.user;
    console.log(obj)
    const {dogs}=this.state
    if(!dogs.some(ziv => ziv.id==e.id)){
      this.setState({dogs:[...this.state.dogs,e]})
    }
    fetch("http://localhost:3001/adoption",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    }).then(response => response.json())
  };


  render() {
    return (
      <div>
        <div className="servicepic">
          <Image
            style={{ width: "50%", height: "400px" }}
            src={Adoptus}
            fluid
          />
        </div>
        <br></br>

        <div className="dogList">
          {this.state.dogs.map((item) => {
            console.log(item.image);
            return (
              <Col lg={3} xs={12} md={6}>
                <div style={{ height: 650 }}>
                  <Card
                    className="card"
                    style={{ width: "15rem", "text-align": "center" }}
                  >
                    <Card.Img
                      style={{ height: 200, width: 300 }}
                      variant="top"
                      src={item.url}
                    />
                    <Card.Body style={{ padding: "6px 8px" }}>
                      <Card.Title style={{ height: 70 }}>
                        Ref:{item.id}
                      </Card.Title>
                      <Card.Text>
                        <p>Height:{item.height}</p>
                        <p>Weight:{item.width}</p>
                      </Card.Text>
                      <Button
                        onClick={() => this.handleClick(item)}
                        variant="outline-success"

                      >
                        Favourite
                      </Button>{" "}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </div>
      </div>
    );
  }
}
