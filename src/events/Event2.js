import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Card } from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog'
// but first install npm i react-bootstrap-dialog --save 
import './events.css';
export class Event2 extends Component {
  constructor() {
    super();
 
    this.state = {
      show: false,
      buttonEnabled: true,
      buttonEnabled2: true,
    };
    
  }
  
  handleModal = () => {
    this.setState({ show: !this.state.show })

  };

  onClick1=()=>{
   
    this.setState({buttonEnabled: false});
    this.dialog.showAlert("joined! See you soon!")
    console.log("joined!");   
};
onClick2=()=>{
   
  this.setState({buttonEnabled: true});
  this.dialog.showAlert('Oops! Cancelled!')
  console.log("Cancelled!");   
};
onClick3=()=>{
  this.setState({buttonEnabled2: false});
  this.dialog.showAlert("joined! See you soon!")
  console.log("joined!");   
};
onClick4=()=>{
this.setState({buttonEnabled2: true});
this.dialog.showAlert('Ops! Cancelled!')
console.log("Cancelled!");   
};
  render() {
    return (<div className="main">
      <div className="container1" >

        <div className="container2">
          <Card className="bg-dark text-white">
            <Card.Img className="image " />
            <Card.ImgOverlay className="cardOverlay">
              <Card.Text className="textCard">
                IT'S TIME TO GET THE BIKES OUT AND START PEDALLING! SO MUCH FUN IS WAITING FOR YOU ON EVENTS!
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

        </div>
        <div className="mainButton">
        <Button className="btn-cs scaleOut uu" onClick={() => { this.handleModal() }}>
          Create An Event
        </Button>
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton onClick={() => { this.handleModal() }}>
            <Modal.Title>Create An Event</Modal.Title>
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
              <Form.Label>Time: </Form.Label>
              <Form.Control type="time" placeholder="Input Event's Location" />
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
            <Button id="Button" className="noselect" onClick={() => { this.onClick1() }}>Create!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="events">
        <h3> Upcoming Events That May Interest You:</h3>
        <Card className="card">
          <Card.Header>Spring Road Trip</Card.Header>
          <Card.Body>
            <Card.Title>IF YOU'RE 40's, THIS IS FOR YOU!</Card.Title>
            <Card.Text>
              A long-distance journey on the road. Typically, road trips are long distances traveled by automobile..
              <br /> <strong>Location: </strong>  Alsalt ,Jordan.
              <br /> <strong>Time: </strong> 12:00pm-2:00pm ,Saturday September 25, 2021
            </Card.Text>
            {this.state.buttonEnabled2 &&
            <Button className="cardBut " onClick={this.onClick3} >Join!</Button>}
            {!this.state.buttonEnabled2&& 
            <Button className="cardBut "variant="success" onClick={this.onClick4}>Joined!</Button>}
          </Card.Body>
          </Card>
          <Card className="card">
          <Card.Header>Morning Road Trip</Card.Header>
          <Card.Body>
            <Card.Title>Everyday morning trip</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
              <br /> <strong>Location: </strong> Amman ,Jordan.
              <br /> <strong>Time: </strong>  8:00am-10:00am ,Saturday Octoper 25, 2021
            </Card.Text>
            {this.state.buttonEnabled &&
            <Button className="cardBut " onClick={this.onClick1} >Join!</Button>}
            {!this.state.buttonEnabled&& 
            <Button className="cardBut "variant="success" onClick={this.onClick2}>Joined!</Button>}
          </Card.Body>
        </Card>
      </div>
      <div>
        <Dialog ref={(component) => { this.dialog = component }} />
      </div>
    </div>

    )
  }
}

export default Event2
