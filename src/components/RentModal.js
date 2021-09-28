import React, { Component } from "react";
import { Modal, Button, Form, ButtonGroup } from "react-bootstrap";

class RentModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.showRental}
          onHide={this.props.handleCloseModalRental}
        >
          <Modal.Header>
            <Modal.Title>{this.props.data.username} Please Fill the Data Below To Complete the Renting process</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleCloseModalRental}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="How Long you want to rent the bike"
                  onChange={this.props.handleDuration}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pick Up Time</Form.Label>
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button style={{height:75 ,width:75}} variant="primary">12 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">1 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">2 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">3 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">4 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">5 AM</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                  <Button style={{height:75 ,width:75}} variant="light">6 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="light">7 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="light">8 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="light">9 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="light"> 10 AM</Button>
                  <Button style={{height:75 ,width:75}} variant="light"> 11 AM</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                  <Button style={{height:75 ,width:75}} variant="primary">12 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">1 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">2 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">3 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">4 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="primary">5 PM</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                  <Button style={{height:75 ,width:75}} variant="light">6 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="light">7 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="light">8 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="light">9 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="light"> 10 PM</Button>
                  <Button style={{height:75 ,width:75}} variant="light"> 11 PM</Button>
                </ButtonGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Total Price:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.price}
                  readOnly
                />
              </Form.Group>
{this.props.showButton ? <Button variant="primary" type="submit">
                Yalla Bike!
              </Button>
              :<><Button disabled variant="success" type="submit">
          Rented
            </Button></>
  }
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={this.props.handleCloseModalRental}
            >
            Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default RentModal;
/*
{this.props.showButton ? <Button variant="primary" type="submit">
                Yalla Bike!
              </Button>
              :<></>
  }           
*/
