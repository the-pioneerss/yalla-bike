import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event2 from './events/Event2';
// import Events from './events/Events';
import CreateEvent from './events/CreateEvent';
import { Modal,Button} from 'react-bootstrap';
import { createEvent } from '@testing-library/dom';

export class App extends Component {

 
  render() {
    return (
      <div>
        {/* <Events/> */}
        <Event2 />
      </div>
    )
  }
}

export default App
