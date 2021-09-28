import React, { Component } from 'react'
import { useHistory } from 'react-router';
import './aboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button, Modal, Form, Card } from 'react-bootstrap';
import image1 from '../events/1.jpeg';
import image2 from '../events/2.jpeg';
import image3 from '../events/3.jpeg';
import image4 from '../events/4.jpeg';
import image5 from '../events/5.jpg';
export class AboutUs extends Component {
    render() {
        return (
            <div>
                <Carousel interval={null}>
                    <Carousel.Item className="slide-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="first-slide-tit">Our story </h1>
                                    <p className="first-slide-p"> Careem is the internet platform for the greater Middle East region. A pioneer of the region's ride-hailing economy, Careem is expanding services across its platform to include mass transportation, delivery and payments to become the region's everyday SuperApp. Careem's mission is to simplify and improve the lives of people and build a lasting organisation that inspires. Careem was established in July 2012,</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img className="pic-one" src="https://skin.sebastianfoster.com/media/catalog/product/cache/1/image/550x/7b8fef0172c2eb72dd8fd366c999954c/e/l/eleanorbicyclebluedetail.jpg" />
                                        <img className="pic-two" src="https://skin.sebastianfoster.com/media/catalog/product/cache/1/image/550x/7b8fef0172c2eb72dd8fd366c999954c/e/l/eleanorbicyclebluedetail.jpg"/>
                                        <img className="pic-three" src="https://skin.sebastianfoster.com/media/catalog/product/cache/1/image/550x/7b8fef0172c2eb72dd8fd366c999954c/e/l/eleanorbicyclebluedetail.jpg"/>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <p>Meet our team >> </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="slide-two">
                        <div className="container">
                            <div className="row">
                                <h1 className="secondSlidetit"> Our Team  </h1>
                                <Card style={{ width: '18rem' }} className="subCont" >
                                    <Card.Img variant="top" className="imgs" src={image1} />
                                    <Card.Body className="cardText">
                                        <Card.Title>Abdallah Alabed </Card.Title>
                                        <Card.Text>
                                            A Full-Stack Developer with background in  Engineering
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }} className="subCont">
                                    <Card.Img variant="top" className="imgs" src={image2} />
                                    <Card.Body className="cardText">
                                        <Card.Title>dina abuzenah </Card.Title>
                                        <Card.Text>
                                            A Full-Stack Developer with background in Civil Engineering.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }} className="subCont">
                                    <Card.Img variant="top" className="imgs" src={image3} />
                                    <Card.Body className="cardText">
                                        <Card.Title>Ehab Al-shrida</Card.Title>
                                        <Card.Text>
                                            A Full-Stack Developer with background in Telecom Engineering.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }} className="subCont">
                                    <Card.Img variant="top" className="imgs" src={image4} />
                                    <Card.Body className="cardText">
                                        <Card.Title>Mohammad Alwrekat </Card.Title>
                                        <Card.Text>
                                            A Full-Stack Developer .
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }} className="subCont">
                                    <Card.Img variant="top" className="imgs" src={image5} />
                                    <Card.Body className="cardText">
                                        <Card.Title>Rand Albqour</Card.Title>
                                        <Card.Text>
                                            A Full-Stack Developer with background in Civil Engineering.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }} className="subCont">
                                    <Card.Img variant="top" className="imgs" src="https://scontent.famm9-1.fna.fbcdn.net/v/t1.6435-9/131928196_4598959873453247_7523781822178262359_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEZqpmb06qcSET88jEGsgMOC-b6uCGA26wL5vq4IYDbrFfUlUT10qp0GR_Qg_qAwL4&_nc_ohc=4n0VS305Qf4AX_-6PiM&_nc_ht=scontent.famm9-1.fna&oh=526e2da53836c8580ef03877ec69bd48&oe=617982F6" />
                                    <Card.Body className="cardText">
                                        <Card.Text className="lastCard">
                                        <strong> So! wanna Join Us?!</strong>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <p> Our Story >> </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        )
    }
}

export default AboutUs
