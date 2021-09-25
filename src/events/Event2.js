import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Button, Modal} from 'react-bootstrap';
import CreateEvent from './CreateEvent';
import './events.css';
export class Event2 extends Component {
 
    render() {
        return (
            <div className="container1">
               <div className="image w-100"
    />
       <div className="container2">
    <p id="text" >Get on your bike and join us in our 
    fun Cycling events! whoul you like to create your own ! 
</p>
     
    </div>
    <Button variant="primary" onClick={this.props.handleShow}>
        Launch static backdrop modal
      </Button>
            </div>
        
        )
    }
}

export default Event2
