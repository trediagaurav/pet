import React from "react";
import "../App.css";
import Image from "react-bootstrap/Image";
import aboutus from "../Images/aboutus.jpg";
import { Row, Card, CardDeck } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div>
        <Row>
        <Image style={{ width: "50%" }} src={aboutus} fluid />
          <Card style={{ width: "50%" }} className="bg-dark text-light">
            <Card.Title>Who we are</Card.Title>
            <Card.ImgOverlay>
              <br></br>
              <Card.Text style={{ fontFamily: "Mulish" }}>
              Established in 1986, PAC - Pet Adoption Center is the biggest
                strength pet retailer of administrations and answers for the
                lifetime needs of pets. At PAC - Pet Adoption Center, we cherish
                pets, and we trust pets improve us as individuals. Consistently
                with each association, PAC - Pet Adoption Center enthusiastic
                partners help convey pet guardians closer to their pets so they
                can live progressively satisfied lives. This vision impacts all
                that we improve the situation our clients, the manner in which
                we bolster our partners, and how we offer back to our networks.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
              We utilize around 56,000 partners and work in excess of 1,650
                pet stores in the United States, Canada and Puerto Rico just as
                more than 200 in-store PAC - Pet Adoption Center PetsHotel puppy
                and feline boarding offices. PAC - Pet Adoption Center gives a
                wide scope of competitively estimated pet sustenance and items
                and offers one of a kind pet administrations including
                preparing, pet prepping, boarding, PAC - Pet Adoption Center
                Doggie Day Camp and in-store pet receptions.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
              Have an inquiry? We have the appropriate response. The forefront
              of PAC - Pet Adoption Center is our prestigious client bolster
              group. Be that as it may, the stays of our business are our
              extraordinary costs, wide choice, speed of conveyance and
              prevalent administration. A demonstration of that is the way that
              we deliver 97% of requests same-day. We structured PAC - Pet
              Adoption Center with the aim of giving not just the best items at
              the most competitive costs, yet to wind up the #1 supplier of pet
              items, training and data.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </div>
      <br></br>
      <div>
        <Card>
          <Card.Body className="aboutLable">We Provide Best Services</Card.Body>
        </Card>
      </div>
      <br></br>
      <div>
      <CardDeck>
          <Card style={{height: 300}}>
            <Card.Body>
              <Card.Title style={{height: 50}}>Register for Free</Card.Title><hr></hr>
              <Card.Text style={{fontFamily: 'Mulish'}}>
              Create profiles for free and enjoy all the facilities which are been proiveded from our organisation.
              Its the best in taking care of the pets and the love one's.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: 300}}>
            <Card.Body>
              <Card.Title style={{height: 50}}>Friendly Community</Card.Title><hr></hr>
              <Card.Text style={{fontFamily: 'Mulish'}}>
              Be part of the our community where you can schedule play dates. We also have a walking time for the dogs and cats,
              which will help the pets to relax and feel precious.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: 300}}>
            <Card.Body>
              <Card.Title style={{height: 50}}>Adoption Center</Card.Title><hr></hr>
              <Card.Text style={{fontFamily: 'Mulish'}}>
                We are the best adoption center in the world. With best services you will ever find. We take a good care 
                of the breeds and there health. Routine checkup from the Wets is also taken care.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <br></br>
      <div>
        <CardDeck>
          <Card style={{height: 300}}>
            <Card.Body>
              <Card.Title style={{height: 50}}>Online Store</Card.Title><hr></hr>
              <Card.Text style={{fontFamily: 'Mulish'}}>
                We have an online store which helps the person to have a look on the dogs and cats we have in our adoption 
                center and helps to make a connection.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: 300}}>
            <Card.Body>
              <Card.Title style={{height: 50}}>Pet Bath</Card.Title><hr></hr>
              <Card.Text style={{fontFamily: 'Mulish'}}>
                We have our professional team to provide a Pet Bath service with all the best products available in the market. Taking into consideration
                there likes and dislikes.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{height: 300}}>
            <Card.Body>
              <Card.Title style={{height: 50}}>Vaccination</Card.Title><hr></hr>
              <Card.Text style={{fontFamily: 'Mulish'}}>
                We have the team of best doctors in the world to takecare of the loved ones. Which give them the vaccination
                from time to time.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div><br></br>
    </>
  );
}
