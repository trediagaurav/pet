import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";



export default function NavBar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" to="/service">
              Service <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-link" to="/favorite">
              Favorite
            </NavLink>
            <NavLink className="nav-link" to="/adoption">
              Adoption
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contactus">
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

