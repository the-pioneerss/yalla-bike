import { Link } from "react-router-dom";
import React, { Component } from "react";
import Axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";
import {
  CardImg,
  Card,
  Button,
  Carousel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
const NEWS = process.env.REACT_APP_BACKEND_URL;

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount = () => {
    Axios.get(`https://${NEWS}/articls`).then((res) => {
      this.setState({
        news: res.data.cache.data,
      });
    });
  };
  render() {
    return (
      <>
        {console.log(`https://${NEWS}`)}
        <Carousel fade interval={1000}>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://cdn.shopify.com/s/files/1/0218/5358/articles/why-bicycling-makes-us-happier-spokester-com_1024x1024.png?v=1523559240"
              alt="First slide"
              height='700'
            />
            <Carousel.Caption >
              <div id="moveMe"> 
              <h3 >First slide label</h3>
              <p id="moveMe2">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item> */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5446306/pexels-photo-5446306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Second slide"
              height="700"
            />
            <Carousel.Caption>
              <h1 id="moveMe2">Yalla Bike!</h1>
              <h3>Join the fun, create events and make friends.</h3>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5061108/pexels-photo-5061108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
              height="700"
            />
            <Carousel.Caption>
              <h1 id="moveMe2">Yalla Bike!</h1>
              <h3>Join the fun, create events and make friends.</h3>
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>
        <br></br>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="1"></Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <Button
                        className="mt-4"
                        variant="light"
                        tag={Link}
                        to="/rent"
                        href="/rent"
                      >
                        <Card.Body className="py-4">
                          <CardImg
                            variant="top"
                            src="https://bikerentalmanager.com/wp-content/uploads/BikeApp_DM_DepositphotosSmall-900x450.png"
                            height="160"
                          />
                          <br></br>
                          <br></br>
                          <h6 className="text-danger text-uppercase">
                            Yalla Rent !
                          </h6>
                          <p className="description mt-3">
                            Rent or Lease a Bike And Help The Community
                          </p>
                        </Card.Body>
                      </Button>
                    </Card>
                  </Col>
                  <Col lg="2"></Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <Button
                        className="mt-4"
                        variant="light"
                        tag={Link}
                        to="/event"
                        href="/event"
                      >
                        <Card.Body className="py-4">
                          <CardImg
                            variant="top"
                            src="https://visitelizabethcity.com//images/event_photos/Tarwheel2019_riverfront.jpg"
                            height="160"
                          />
                          <br></br>
                          <br></br>
                          <h6 className="text-success text-uppercase">
                            Yalaa Events !
                          </h6>
                          <p className="description mt-3">
                            Get Ready and Join The Fun With The Community
                          </p>
                        </Card.Body>
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section className="section pb-0 bg-gradient-danger"></section>
        <section class="whyUssImg">
          <Container>
            <br />
            <br />

            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src="http://cdn.shopify.com/s/files/1/0218/5358/articles/why-bicycling-makes-us-happier-spokester-com_1024x1024.png?v=1523559240"
                    top
                    style={{ height: 500 }}
                  />
                </Card>
              </Col>
              <Col md="5">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3 className="text-center">Why US !?</h3>
                  <h4 className="HeroParag">
                    We Are The First Jordanian Team To Create an App That Aims
                    Directly To Save the Environment By Replacing The
                    Traditional Gas-Transportation Methods With An Eco-Friendly
                    Bicycles That Allows People To Have a Light Workout While
                    Finishing Their Trips In a Faster Way Than Walking.
                    <br />
                    We Are Creating a Community That Cares About the
                    Environmental Situation In Jordan To Create a Better Future
                    For Us and Our Kids
                    <br />
                    So What Are You Waiting For, SignUp and Lets Get You
                    Started!
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />{" "}
        </section>
        <section class="newSection">
          <br></br>
          <br></br>
          <h1 id="fontoff" className="text-center">
            Why We Are Doing This ?!
          </h1>
          <br></br>
          <br></br>
          <section class="section">
            <div className="row">
              {this.state.news.map((item) => {
                return (
                  <>
                    <Col id="nnee" lg="5">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-4">
                          <br></br>
                          <br></br>
                          <h6
                            variant="top"
                            className="text-danger text-uppercase"
                          >
                            "{item.title}"
                          </h6>
                          <p className="description mt-3">{item.description}</p>
                          <Button
                            className="mt-4"
                            id="buttonNews"
                            href={item.sourseUrl}
                            target="_blank"
                          >
                            Show Full Article
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })}
              <br />
              <h4 id="lastPMain" className="text-center">
                With The Increase In The Earths' Temperature And The Deadly
                Results We See In The News On Daily Basis From The Pollution We
                As A Youth Have To Step Up And Help The Planet We Live On So We
                All Can Survive!
                <br />
                Join Our Community And Help Us Save Planet Earth!
              </h4>
            </div>
          </section>
          <br></br>
          <br></br>
        </section>
        <Footer />
      </>
    );
  }
}
export default withAuth0(Main);
