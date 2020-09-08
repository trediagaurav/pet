import React from "react";
import "../App.css";
import Image from "react-bootstrap/Image";
import servicepic from "../Images/servicepic.jpg";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.jpg";
import { Row, Card } from "react-bootstrap";

export default function Service() {
  return (
    <>
      <div className="servicepic">
        <Image style={{ width: "50%" }} src={servicepic} fluid />
      </div>

      <div>
        <Row>
        <Image style={{ width: "50%" }} src={service1} fluid />
          <Card style={{ width: "50%" }} className="bg-light text-dark">
            <Card.Title className="petbath">Vaccinations</Card.Title>
            <Card.ImgOverlay className="petbath">
              <br></br>
              <Card.Text style={{ fontFamily: "Mulish" }}>
                Vaccinations can help avoid costly treatments for diseases that
                can be prevented. Vaccinations prevent diseases that can be
                passed between animals and also from animals to people. Diseases
                prevalent in wildlife, such as rabies and distemper, can infect
                unvaccinated pets.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
              Most animals need only what are known as core vaccines: those
                that protect against the most common and most serious diseases.
                In dogs, the core vaccines are distemper, parvovirus, hepatitis
                and rabies. In cats, they are panleukopenia, calicivirus,
                rhinotracheitis (herpesvirus), and rabies as required by law.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
              Just like children, dogs and cats need vaccinations against
                dangerous viral and bacterial diseases. Vaccination remains the
                single most effective method for protecting against infectious
                disease in healthy animals. Without proper vaccination, your pet
                is left unprotected. Vaccines are preventative rather than
                curative.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
              To protect your pet from contagious diseases, keep his essential
                vaccinations up-to-date. This is important even if your pet is
                kept mostly indoors. Many contagious diseases are airborne and
                your pet could easily be exposed through an open window. There
                is also always a risk that your pet could accidentally slip out
                the door. Boarding kennels, dog parks and grooming salons are
                all areas where your pet is likely to be exposed to contagious
                diseases so be sure to consult with your veterinarian before
                taking your pet to any of these places It is also important to
                keep in mind that vaccinations take a few days to a few weeks to
                become effective.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </div>

      <br></br>
      <div>
        <Row>
          <Image style={{ width: "50%" }} src={service2} fluid />
          <Card style={{ width: "50%" }} className="bg-light text-dark">
            <Card.Title className="petbath">Pet Bath</Card.Title>
            <Card.ImgOverlay className="petbath">
              <br></br>
              <Card.Text style={{ fontFamily: "Mulish" }}>
                Check-In - Your service starts with our 5-point Pet Care
                Check**, a quick screening where we make sure nothing looks or
                feels abnormal
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
                Initial brush & clip - Each dog's service is personalized to
                their needs, which may include a thorough brushout or initial
                shave for dogs with thick coats.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
                Bath Scrub-a-dub! - We gently massage shampoo into your dog's
                coat to remove dirt, oil and debris, leaving them silky-smooth
                and squeaky-clean.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
                Dry - Drying dogs isn't one-size-fits-all. We use a variety of
                methods from air- and towel-drying to non-heated hand-held
                dryers to ensure dogs' safety and comfort.
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
                Full Haircut - Here's where the real transformation happens. Our
                stylists work their magic to create cuts that meet breed
                standards or your personal style preference—100% satisfaction
                guaranteed!
              </Card.Text>
              <Card.Text style={{ fontFamily: "Mulish" }}>
                We have our professional team to provide a Pet Bath service with
                all the best products available in the market. Taking into
                consideration there likes and dislikes.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </div>
      <br></br>
    </>
  );
}
