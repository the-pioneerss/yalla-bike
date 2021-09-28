import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class RenteeModal extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.showModalNew}
          onHide={this.props.handleCloseModalNew}
        >
          <Modal.Header>
            <Modal.Title>
              {this.props.data.username} Please Fill the Data Below To List your
              Bike for Renting
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.addBike}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={this.props.handleLocation}
                >
                  <option>Choose Your Location</option>
                  <option value="Irbid"> Irbid </option>
                  <option value="Zarqa"> Zarqa </option>
                  <option value="Amman"> Amman </option>
                  <option value="Aqaba"> Aqaba </option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gender Icon</Form.Label>
                <Form.Select onChange={this.props.handleGender}>
                  <option>Choose Your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Phone Number </Form.Label>
                <Form.Control onChange={this.props.handlePhone}
                  type="number"
                  placeholder="Please Enter Your Phone Number"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                List It!
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.handleCloseModalNew}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default RenteeModal;
