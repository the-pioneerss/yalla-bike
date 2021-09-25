import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event2 from './events/Event2';
// import Events from './events/Events';
import CreateEvent from './events/CreateEvent';
import { Modal,Button} from 'react-bootstrap';
import { createEvent } from '@testing-library/dom';

export class App extends Component {
constructor(props){
  super(props);
        this.state={
            showModal :false
        };
      }
    handleShow=()=>{
      this.setState({showModal:true,})
      
    };
    handleClose=()=>{
      this.setState({
        showModal:false,
      })
    }
 
  render() {
    return (
      <div>
        {/* <Events/> */}
        <Event2 showModal={this.state.showModal} 
     handleShow={this.handleShow}
     handleClose={this.handleClose}/>
     {this.state.showModal && (
      <createEvent 
      showModal={this.state.showModal} 
    
      handleClose={this.handleClose}/>
    )}
      </div>
    )
  }
}

export default App
