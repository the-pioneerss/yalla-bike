import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './events.css';
export class Events extends Component {
    render() {
        return (
            <div  className='container1'>
                <Carousel fade  className="Carousal" interval={1500}>
    <Carousel.Item className="item">
    <img
      className="d-block w-100"
      src="https://cdn.road.cc/sites/default/files/styles/main_width/public/deloitte-ride-across-britain-1.jpg"
      alt="First slide"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2019/11/30/15/14/sport-4663417_960_720.jpg"
      alt="Second slide"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.saudevitalidade.com/wp-content/uploads/2020/06/lulufive-ciclismo-feminino.jpg"
      alt="Third slide"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cyclingmagazine.ca/wp-content/uploads/2019/09/MEC_Trail_1.jpg"
      alt="Third slide"
    />
    </Carousel.Item>
    </Carousel>
    <div className="container2">
    <p id="text" >First slide label lorem50ghghhhhhhhhhhg
    ggggggggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbb bxgyrndyrdtdytrfggggggggggggggg</p>
     
    </div>
            </div>
        )
    }
}

export default Events
