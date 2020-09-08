import React from "react";
import { Nav } from "react-bootstrap";
import "../App.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item className="footerIcon">
            <SocialIcon url="http://facebook.com" />
          </Nav.Item>
          <Nav.Item className="footerIcon">
            <SocialIcon url="http://youtube.com" />
          </Nav.Item>
          <Nav.Item className="footerIcon">
            <SocialIcon url="http://twitter.com" />
          </Nav.Item>
          <Nav.Item>
            <SocialIcon url="http://google.com" />
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
