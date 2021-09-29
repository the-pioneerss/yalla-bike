import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form, Card } from "react-bootstrap";
import Dialog from "react-bootstrap-dialog";
// but first install npm i react-bootstrap-dialog --save
import "./events.css";
import axios from "axios";

export class Event2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      buttonEnabled: true,
      buttonEnabled2: true,
      eventsData: [],
      Creator:this.props.name
    };
  }

  handleModal = () => {
    this.setState({ show: !this.state.show });
  };

  onClick1 = () => {
    this.setState({ buttonEnabled: false });
    this.dialog.showAlert("joined! See you soon!");
    console.log("joined!");
  };
  onClick2 = () => {
    this.setState({ buttonEnabled: true });
    this.dialog.showAlert("Oops! Cancelled!");
    console.log("Cancelled!");
  };
  onClick3 = () => {
    this.setState({ buttonEnabled2: false });
    this.dialog.showAlert("You Joined The Event, Can't Wait to See You !");
    console.log("joined!");
  };
  onClick4 = () => {
    this.setState({ buttonEnabled2: true });
    this.dialog.showAlert("You Have Left The Event!");
    console.log("Cancelled!");
  };

  componentDidMount = async () => {
    const eventts = await axios.get(
      `https://${process.env.REACT_APP_BACKEND_URL}/events`
    );
    this.setState({
      eventsData: eventts.data,
    });
  };

  render() {
// <<<<<<< abdAboutme
//     console.log(this.state.eventsData)
// =======
//     return (<div className="main">
//       <div className="container1" >
//         <div className="container2">
//           <Card className="bg-dark text-white">
//             <Card.Img className="image " />
//             <Card.ImgOverlay className="cardOverlay">
//               <Card.Text className="textCard">
//                 IT'S TIME TO GET THE BIKES OUT AND START PEDALLING! SO MUCH FUN IS WAITING FOR YOU ON EVENTS!
//               </Card.Text>
//             </Card.ImgOverlay>
//           </Card>
// >>>>>>> development

    return (
      <div className="main">
        <div className="container1">
          <div className="container2">
            <Card className="bg-dark text-white">
              <Card.Img className="image" />
              <Card.ImgOverlay className="cardOverlay">
                <Card.Text className="textCard">
                  IT'S TIME TO GET THE BIKES OUT AND START PEDALLING! SO MUCH
                  FUN IS WAITING FOR YOU ON EVENTS!
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="mainButton">
            <Button
              className="btn-cs scaleOut uu"
              variant="#E2466E"
              onClick={() => {
                this.handleModal();
              }}
            >
              Create An Event
            </Button>
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header
              closeButton
              onClick={() => {
                this.handleModal();
              }}
            >
              <Modal.Title>Create An Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.addEvent}>
                <Form.Label>Event's Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input Event's Name"
                  onChange={this.props.handleEventName}
                />
                <br />
                <Form.Label>Location:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input Event's Location"
                  onChange={this.props.handleLocationEvent}
                />
                <br />
                <Form.Label>Time: </Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Input Event's Location"
                  onChange={this.props.handleTimeEvent}
                />
                <br />
                <Form.Label>Date: </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Input Event's Location"
                  onChange={this.props.handleEventsDate}
                />
                <br />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>General Informations</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    onChange={this.props.handleGeneralInfoEvent}
                  />
                </Form.Group>
                <br />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Further Information About The Event</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={this.props.handleDescriptionEvent}
                  />
                </Form.Group>
                <Button
                  id="Button"
                  className="noselect"
                  type="submit"
                  onClick={this.handleModal}
                >
                  Create!
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => {
                  this.handleModal();
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
// <<<<<<< abdAboutme

        <div className="events">
          <h3> Upcoming Events May Interest You : </h3>

          {this.state.eventsData.map((e) => {
            return (
              <>
                <Card className="card" style={{ width: "50rem" }}>
                  <Card.Header className="eve">{e.eventName}</Card.Header>
                  <Card.Body>
                    <Card.Title>{e.generalInfo}</Card.Title>
                    <Card.Text>
                      {e.description}
                      <br /> <strong>Location: </strong> {e.location}
                      <br /> <strong>Date and Time: </strong> {e.eventsDate} ,
                      {e.time}
                      <br /> <strong>Created By: {this.props.name}</strong>
                    </Card.Text>

                    {e.userName === this.props.name ? (
                      <Button
                        onClick={() => this.props.deleteEvent(e._id)}
                        className="yalla"
                        variant="danger"
                      >
                        Delete
                      </Button>
                    ) : (
                      <></>
                    )}
                    {this.state.buttonEnabled2 && (
                      <Button
                        className="cardBut "
                        variant="warning"
                        onClick={this.onClick3}
                      >
                        Join!
                      </Button>
                    )}
                    {!this.state.buttonEnabled2 && (
                      <Button
                        className="cardBut "
                        variant="warning"
                        onClick={this.onClick4}
                      >
                        Joined
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
        <div>
          <Dialog
            ref={(component) => {
              this.dialog = component;
            }}
          />
        </div>
// =======
        <div className="mainButton">

        <Button className="btn-cs scaleOut uu" onClick={() => { this.handleModal() }}>

        <Button className="btn-cs scaleOut uu" variant='#E2466E' onClick={() => { this.handleModal() }}>

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
            <Button variant="danger" onClick={() => { this.handleModal() }}>
              Close
            </Button>
            <Button id="Button" className="noselect" onClick={() => { this.onClick1() }}>Create!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="events">
        <h3> Upcoming Events May Interest You : </h3>
        <Card className="card" style={{ width: '50rem' }}>
          <Card.Header className='eve'>Spring Road Trip</Card.Header>
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

              <br /> <strong>Time: </strong> 12:00pm ,Saturday September 25, 2021
            </Card.Text>
            {this.state.buttonEnabled2 &&
            <Button className="cardBut " variant='warning' onClick={this.onClick3} >Join!</Button>}
            {!this.state.buttonEnabled2&& 
            <Button className="cardBut " variant="warning" onClick={this.onClick4}>Joined</Button>}
          </Card.Body>
          </Card>
          <Card className="card" style={{ width: '50rem' }}>
          <Card.Header className='eve'>Morning Road Trip</Card.Header>

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

              <br /> <strong>Time: </strong>  8:00am ,Saturday Octoper 25, 2021
            </Card.Text>
            {this.state.buttonEnabled &&
            <Button className="cardBut " variant="warning" onClick={this.onClick1} >Join!</Button>}
            {!this.state.buttonEnabled&& 
            <Button className="cardBut "variant="warning" onClick={this.onClick2}>Joined!</Button>}

          </Card.Body>
        </Card>
      </div>
      <div>
        <Dialog ref={(component) => { this.dialog = component }} />
// >>>>>>> development
      </div>
    );
  }
}

export default Event2;

{
  /*  */
}
