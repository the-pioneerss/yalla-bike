import React, { Component } from 'react';
import Axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { CardImg, Badge, Card, Button, Carousel, Container, Row, Col } from 'react-bootstrap';
const NEWS = process.env.REACT_APP_BACKEND_URL_NEWS;
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }
  componentDidMount = () => {
    Axios.get(`http://${NEWS}`).then(res => {
      this.setState({
        news: res.data.cache.data
      })
    })
  }
  render() {
    return (
      <>
        <Carousel fade interval={1000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://cdn.shopify.com/s/files/1/0218/5358/articles/why-bicycling-makes-us-happier-spokester-com_1024x1024.png?v=1523559240"
              alt="First slide"
              height='500'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw5151ddc9/images/specials/outlet-hp-newin.jpg?sw=1280&sh=650&sm=cut"
              alt="First slide"
              height='500'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.chiangraitimes.com/wp-content/uploads/2021/09/types-of-bikes-or-mountain-bike-vs-road-bike.jpeg"
              alt="Second slide"
              height='500'
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.bikekingdom.ch/microsites-assets/bike-kingdom/ninos-kingdom-class/image-thumb__13583992__jsonLd/nino-schurter-bike-kingdom.webp"
              alt="Third slide"
              height='500'
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br><br></br><br></br>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="1">
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <Button
                        className="mt-4"
                        variant="light"
                        href="https://our-passion.github.io/library/index"
                        target="_blank"
                      >
                        <Card.Body className="py-4">
                          <CardImg variant='top' src='https://bikerentalmanager.com/wp-content/uploads/BikeApp_DM_DepositphotosSmall-900x450.png' height='160' />
                          <br></br><br></br>
                          <h6 className="text-danger text-uppercase">
                            Yalla Rent !!
                          </h6>
                          <p className="description mt-3">
                            loremipsum loremipsum loremipsum loremipsum
                            loremipsum loremipsum loremipsum loremipsum
                          </p>
                        </Card.Body>
                      </Button>
                    </Card>
                  </Col>
                  <Col lg="2">
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <Button
                        className="mt-4"
                        variant="light"
                        href="https://our-passion.github.io/library/index"
                        target="_blank"
                      >
                        <Card.Body className="py-4">
                          <CardImg variant='top' src='https://visitelizabethcity.com//images/event_photos/Tarwheel2019_riverfront.jpg' height='160' />
                          <br></br><br></br>
                          <h6 className="text-success text-uppercase">
                            Yalaa Events !!
                          </h6>
                          <p className="description mt-3">
                            loremipsum loremipsum loremipsum loremipsum
                            loremipsum loremipsum loremipsum loremipsum
                          </p>
                        </Card.Body>
                      </Button></Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <br></br><br></br><br></br><br></br>
        <section className="section pb-0 bg-gradient-danger"></section>
        <section className="section bg-light">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src="https://i.pinimg.com/564x/80/6b/8b/806b8b775e4470621a684d59766c4699.jpg"
                    top
                    style={{ height: 500 }}
                  />
                </Card>
              </Col>
              <Col md="5">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-settings" /></div>
                  <h3 className="text-center">Why US !?</h3>
                  <p className="text-center">
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    orem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <section class='newSection'>
          <br></br><br></br>
          <h1 id='fontoff' className="text-center">Why We Are Doing This ?!</h1>
          <br></br><br></br>
          <section class='section'>
            <div className='row'>
              {
                this.state.news.map(item => {
                  return <>
                    <Col id='nnee' lg="5">
                      <Card className="card-lift--hover shadow border-0">
                        <Card.Body className="py-4">
                          <br></br><br></br>
                          <h6 variant='top' className="text-danger text-uppercase">"{item.title}"</h6>
                          <p className="description mt-3">{item.description}</p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              {item.sourseName}
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            variant="danger"
                            href={item.sourseUrl}
                            target="_blank"
                          >Show
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                })
              }
            </div></section><br></br><br></br></section>
      </>
    )
  }
}
export default withAuth0(Main);
/*
                        <div>
                          <Badge color="success" pill className="mr-1">
                            Family
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            Enjoy
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            Groups
                          </Badge>
                        </div>
                         <blockquote className="card-blockquote">
          <svg
            className="svg-bg success"
            preserveAspectRatio="none"
            viewBox="0 0 583 95"
          >
            <polygon
              className="fill-default "
            />
            <polygon
              variant='danger'
              color='yellow'
              className="bg-success"
              opacity=".2"
              points="0,42 583,95 683,0 0,95"
            />
          </svg>
        </blockquote>
*/