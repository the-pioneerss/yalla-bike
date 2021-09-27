import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event2 from './events/Event2';
import AboutUs from './events/AboutUs';

export class App extends Component {

 
  render() {
    return (
      <div>
        <Event2 />
        {/* <AboutUs/> */}
      </div>
    )
  }
}

export default App
