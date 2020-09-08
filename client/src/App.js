import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Service from "./MyComponents/Service";
import Adoption from "./MyComponents/Adoption";
import Favorite from "./MyComponents/Favorite";
import ContactUs from "./MyComponents/ContactUs";
import Footer from "../src/Components/Footer";
import Register from "./Components/Register/Register";
import Signin from "./Components/Signin/Signin";
import Navigation from "./Components/Navigation/Navigation";

class App extends Component {
  constructor() {
    super();

    this.state = {
      //To Route the between signin forms and dashboard
      route: "signin",
      isSignedIn: false,

      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  //Function to load the user when register form is inputed(pass function to Register Component)
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  //Function to Change Routes from Signin and Home Dashboard
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }

    this.setState({ route: route });
  };

  render() {
    //Destructuring our states instead of using this.state
    const { isSignedIn, route } = this.state;

    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {
          /* Jsx Javascript expression to know when to change the route */

          route === "home" ? ( //if this is true then route to home dashboard
            <>
              {/* <NavBar /><br></br> */}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/adoption">
                  <Adoption user={this.state.user} />
                </Route>
                <Route path="/favorite">
                  <Favorite user={this.state.user} />
                </Route>
                <Route path="/contactus" component={ContactUs} />
                <Redirect to="/" />
                <Home />
              </Switch>
              <Footer />
            </>
          ) : //else if route is Signin go to Signin

          route === "signin" ? (
            <Signin
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          ) : (
            //else return the route to Register

            <Register
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          )
        }
      </div>
    );
  }
}

export default App;
