import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button, Modal ,Form,Card} from 'react-bootstrap';
import CreateEvent from './CreateEvent';
import './events.css';
export class Event2 extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  handleModal = () => {
    this.setState({ show: !this.state.show })

  };


  render() {
    return (<div className="main">
      <div className="container1" >

        <div className="container2">
        <Card className="bg-dark text-white">
  <Card.Img className="image"  />
  <Card.ImgOverlay className="cardOverlay">
    <Card.Text className="textCard">
    IT'S TIME TO GET THE BIKES OUT AND START PEDALLING! SO MUCH FUN IS WAITING FOR YOU ON EVENTS!
    </Card.Text>
  </Card.ImgOverlay>
</Card>

        </div>
        <Button className="btn-cs scaleOut" onClick={() => { this.handleModal() }}>
          Create An Event 
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton onClick={() => { this.handleModal() }}>
            <Modal.Title>Create Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Form.Label>Your Name :</Form.Label>
          <Form.Control type="text" placeholder="Input Your Full Name .." />
  <br />
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Input your active Email" />
  </Form.Group>
  <Form.Label>Event's Name :</Form.Label>
  <Form.Control type="text" placeholder="Input Event's Name" />
  <br />
  <Form.Label>Location</Form.Label>
  <Form.Control type="text" placeholder="Input Event's Location" />
  <br />
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Further Information About The Event</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => { this.handleModal() }}>
              Close
            </Button>
            <Button id="Button" className="noselect">Create! 
           </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="events">
        <h3> Upcoming Events That May Interest You:</h3>
      <Card className="card">
  <Card.Header>Spring road trip</Card.Header>
  <Card.Body>
    <Card.Title>IF YOU'RE 40'S, THIS IS FOR YOU!</Card.Title>
    <Card.Text>
    A long-distance journey on the road. Typically, road trips are long distances traveled by automobile..
    <br/> Location: Alsalt ,Jordan.
    <br/> Time: Saturday September 25, 2021
    </Card.Text>
    <Button className="cardBut">Join!</Button>
  </Card.Body>
  <Card.Header>Morning road trip</Card.Header>
  <Card.Body>
    <Card.Title>everyday morning trip</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      <br/> Location: Amman ,Jordan.
    <br/> Time: Saturday Octoper 25, 2021
    </Card.Text>
    <Button className="cardBut ">Join!</Button>
  </Card.Body>
</Card>
      </div>
    </div>

    )
  }
}

export default Event2
