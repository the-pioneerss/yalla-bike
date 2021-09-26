import React, { Component } from 'react'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button, Modal, Form, Card } from 'react-bootstrap';
export class AboutUs extends Component {
  render() {
    return (
      <div className="mainContainer">
        <h1>Meet Our Team </h1>

        <div class="boxesContainer">

          <div class="cardBox">
            <div class="card ">
              <div class="front abd">
                <h3>Abdallah Alabed </h3>
                <p>Hover to flip</p>
                {/* <strong>&#x21bb;</strong> */}
              </div>
              <div class="back">
                <h3>Back Side One</h3>
                <p>Content in card one</p>
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card dina">
              <div class="front">
                <h3>Dina Abuzenah</h3>
                <p>Hover to flip</p>
               
              </div>
              <div class="back">
                <h3>Back Side Two</h3>
                <p>Content in card two</p>
              </div>
            </div>
          </div>
          <div class="cardBox">
            <div class="card ">
              <div class="front ehab">
                <h3>Ehab Al-shrida </h3>
                <p>Hover to flip</p>
                
              </div>
              <div class="back">
                <h3>Back Side Three</h3>
                <p>Content in card three</p>
              </div>
            </div>
          </div>
      
          <div class="cardBox">
            <div class="card moh">
              <div class="front moh">
                <h3>Mohammad Alwrekat</h3>
                <p>Hover to flip</p>
               
              </div>
              <div class="back">
                <h3>Back Side Four</h3>
                <p>Content in card four</p>
              </div>
            </div>
          </div>
          <div class="cardBox">
    <div class="card rand">
      <div class="front rand">
        <h3>Rand Albqour</h3>
        <p>Hover to flip</p>
      
      </div>
      <div class="back">
        <h3>Back Side One</h3>
        <p>Content in card one</p>
      </div>
    </div>
  </div>
        </div>
        <br/>
        <div className="sec">{' '}
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

</div>
<h1>Join Us </h1>
<>
<Button variant="outline-secondary">Yalla Bike !</Button>{' '}
<Button variant="outline-secondary">Yalla Rent! </Button>{' '}
</>
      </div>
    )
  }
}

export default AboutUs
