import React, { Component } from "react";
import "../App.css";
import blogform2 from "../Images/blogform2.jpg";
import { Card, Button, Image } from "react-bootstrap";

export default class BlogForm extends Component {
  state = {
    value: "",
    file: null
  };

  changeText = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value});
  };
  handleChange = (e) => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0]),
    });
  };
  render() {
    var box = { height: "250px", width: "250px" };
   
    return (
      <div className="blogForm">
          <div className="blogForm1">
          <Image src={blogform2} fluid />
          </div>

          <div className="blogForm2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" placeholder={'Please insert the Image'} src={this.state.file} />
            <hr></hr>
            <input type="file" onChange={this.handleChange} />
            <hr></hr>
            <Card.Body>
              <Card.Text>
                <textarea
                  style={box}
                  placeholder={"Let us know your experience."}
                  value={this.state.value}
                  onChange={this.changeText}
                />
              </Card.Text>
              <Button variant="primary">Post</Button>
            </Card.Body>
          </Card>
          </div><br></br>
      </div>
    );
  }
}
