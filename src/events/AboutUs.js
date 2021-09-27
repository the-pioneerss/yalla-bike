import React, { Component } from 'react'
import { useHistory } from 'react-router';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import image1 from '../events/1.jpeg';
import image2 from '../events/2.jpeg';
import image3 from '../events/3.jpeg';
import image4 from '../events/4.jpeg';
import image5 from '../events/5.jpg';

// function yalla() {

//  let history = useHistory();
// }

export class AboutUs extends Component {
  render() {
    return (
      <div className="mainContainer">

        <h1 className="teamTitle">Meet Our Team </h1>
        <div className="mainBox" >
        <Card style={{ width: '30rem' }} className="subCont" >
  <Card.Img variant="top" className="imgs" src={image1} />
  <Card.Body>
    <Card.Title>Abdallah Alabed </Card.Title>
    <Card.Text>
    A Full-Stack Developer with background in  Engineering
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '30rem'}}className="subCont">
  <Card.Img variant="top" className="imgs" src={image2} />
  <Card.Body>
    <Card.Title>dina abuzenah </Card.Title>
    <Card.Text>
    A Full-Stack Developer with background in Civil Engineering.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '30rem' }}className="subCont">
  <Card.Img variant="top" className="imgs" src={image3} />
  <Card.Body>
    <Card.Title>Ehab Al-shrida</Card.Title>
    <Card.Text>
    A Full-Stack Developer with background in Telecommunication Engineering.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '30rem' }}className="subCont">
  <Card.Img variant="top" className="imgs" src={image4} />
  <Card.Body>
    <Card.Title>Mohammad Alwrekat </Card.Title>
    <Card.Text>
    A Full-Stack Developer .
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '30rem' }}className="subCont">
  <Card.Img variant="top" className="imgs" src={image5} />
  <Card.Body>
    <Card.Title>Rand Albqour</Card.Title>
    <Card.Text>
      A Full-Stack Developer with background in Civil Engineering.
    </Card.Text>
  </Card.Body>
</Card>
        </div>
        <Card style={{ width: '100%' }} className="card2">
          <Card.Body>
            <Card.Title style={{ fontSize: '30px' }} className="sec2" >Our Mission Some quick example text to build on the card title and make up the bulk of
              the card's content.</Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
  }
  // onClick={()=>{history.push("BR")}}
}
export default AboutUs