import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,Button } from 'react-bootstrap';


export class CreateEvent extends Component {

    render() {
        return (
            <div>
                <Modal 
       show={this.props.showModal}
        onHide={this.props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>  
            </div>
        )
    }
}

export default CreateEvent
