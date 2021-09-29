import React, { Component } from "react";
import "./aboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import image1 from "../events/1.jpeg";
import image2 from "../events/2.jpeg";
import image3 from "../events/3.jpeg";
import image4 from "../events/4.jpg";
import image5 from "../events/5.jpg";
export class AboutUs extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={null}>
          <img
            className="d-block w-100"
            className="img1"
            src="https://images4.alphacoders.com/924/924437.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="page1_1">
            <h2>Let's Start a New Trend To Saving Earth</h2>
            <p className="para1">
              We Are Responsible for the planet we live on, and from that
              responsibility our idea "Yalla Bike!" aims to raise the number of
              people who use bicycle as their way of transportation to help
              reduce the gases of cars and do a light workout that will help
              them to live longer!{" "}
            </p>
          </Carousel.Caption>
          <Carousel.Caption className="page1_2">
            <h2>Our Mission</h2>
            <p className="para2">
              {" "}
              convince people to use gas-free vehicles to fight again pollution
              in jordan firstly and the world secondly, and enrich the idea of
              no-carbon transportation for the upcoming youth generation!{" "}
            </p>
          </Carousel.Caption>
          <Carousel.Caption className="h2Right">
            <h2>Our Vision</h2>
            <p className="para2">
              {" "}
              Expand Wider to allow our community to grow and help even more in
              saving the world! we are planning to make the renting feature
              available in all of jordan and hopefully the rest of the world so
              we can save the planet no matter where were we!
            </p>
          </Carousel.Caption>
          <Carousel.Caption>
            <p className="team">Meet The Team</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
            className="img2"
          />
          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="abdCard">
              <Card.Img variant="top" src={image1} style={{ height: "13rem" }} />
              <Card.Body style={{ height: "13rem" }}>
                <br />
                <Card.Title className="titleCardUS">Abdallah Alabed</Card.Title>
                <Card.Text>
                  Mechatronics Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="mhmdCard">
              <Card.Img variant="top" src={image4} style={{ height: "13rem" }} />
              <Card.Body style={{ height: "13rem" }}>
                <br />
                <Card.Title className="titleCardUS"> Mohammad Alwrekat </Card.Title>
                <Card.Text>
                  Creative Designer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="dinaCard">
              <Card.Img variant="top" src={image2} style={{ height: "13rem" }} />
              <Card.Body style={{ height: "13rem" }}>
                <br />
                <Card.Title className="titleCardUS"> dina abuzenah </Card.Title>
                <Card.Text>
                  Telecommunication Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="ehabCard">
              <Card.Img variant="top" src={image3} style={{ height: "13rem" }} />
              <Card.Body style={{ height: "13rem" }}>
                <br />
                <Card.Title className="titleCardUS"> Ehab Al-shrida </Card.Title>
                <Card.Text>
                  Telecommunication Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="randCard">
              <Card.Img variant="top" src={image5} style={{ height: "13rem" }} />
              <Card.Body style={{ height: "13rem" }}>
                <br />
                <Card.Title className="titleCardUS"> Rand Albqour </Card.Title>
                <Card.Text>
                  Civil Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
          <Carousel.Caption>
            <h2 className="bottomPara">The Team That Paved The Way</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default AboutUs;