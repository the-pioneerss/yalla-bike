import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Nav, Tab, Carousel, Container, Row, Col, Figure, Image } from 'react-bootstrap';
import Footer from './Footer';
export class Main extends Component {
  render() {
    return (
      <>
        <Carousel fade>
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
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<Container>
  <Row>
    <Col lg={5} md={5}>
    <Figure.Image
    width={300}
    height={250}
    alt="171x180"
    src="https://st4.depositphotos.com/5260065/25657/v/450/depositphotos_256570160-stock-illustration-beautiful-girl-with-glasses-riding.jpg"
  />    </Col>
    <Col lg={1} md={1}>
    </Col>
    <Col lg={5} md={5}>
      <br></br><br></br>
    <Figure.Image
    width={300}
    height={250}
    alt="171x180"
    src="https://img.freepik.com/free-vector/boy-riding-bike-town-webstyle-background-summer-children-outdoor-activities-kid-riding-bicycle-summer-outside_207606-124.jpg?size=626&ext=jpg"
  />    </Col>
  </Row>
</Container>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Container>
          <Row>
            <Col><Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first"><Button id='FFONT' variant="#E05D5D">
                        Why Us ?</Button></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h6 class='lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                    </Tab.Pane>
                  </Tab.Content></Col></Row></Tab.Container></Col></Row>
          <Row><Col></Col><Col></Col><Col></Col>
          </Row></Container>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer />
      </>
    )
  }
}
export default withAuth0(Main);