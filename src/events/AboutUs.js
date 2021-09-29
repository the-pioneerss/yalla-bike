import React, { Component } from "react";
import { useHistory } from "react-router";
import "./aboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button, Modal, Form, Card } from "react-bootstrap";
import image1 from "../events/1.jpeg";
import image2 from "../events/2.jpeg";
import image3 from "../events/3.jpeg";
import image4 from "../events/4.jpg";
import image5 from "../events/5.jpg";
export class AboutUs extends Component {
  render() {
    return (
      // <div>
      //     <Carousel interval={null} className='trash'>
      //         <Carousel.Item className="slide-one">
      //             <div className="container">
      //                 <div className="row">
      //                     <div className="col-md-6">
      //                         <h1 className="first-slide-tit">Our story </h1>
      //                         <p className="first-slide-p"> Careem is the internet platform for the greater Middle East region. A pioneer of the region's ride-hailing economy, Careem is expanding services across its platform to include mass transportation, delivery and payments to become the region's everyday SuperApp. Careem's mission is to simplify and improve the lives of people and build a lasting organisation that inspires. Careem was established in July 2012,</p>
      //                     </div>
      //                     <div className="col-md-6">
      //                         <div className="img-box">
      //                             <img className="pic-one" src="https://skin.sebastianfoster.com/media/catalog/product/cache/1/image/550x/7b8fef0172c2eb72dd8fd366c999954c/e/l/eleanorbicyclebluedetail.jpg" />
      //                             <img className="pic-two" src="https://skin.sebastianfoster.com/media/catalog/product/cache/1/image/550x/7b8fef0172c2eb72dd8fd366c999954c/e/l/eleanorbicyclebluedetail.jpg"/>
      //                             <img className="pic-three" src="https://skin.sebastianfoster.com/media/catalog/product/cache/1/image/550x/7b8fef0172c2eb72dd8fd366c999954c/e/l/eleanorbicyclebluedetail.jpg"/>

      //                         </div>
      //                     </div>
      //                 </div>
      //             </div>
      //             <Carousel.Caption>
      //                 <p> Meet our team  </p>
      //             </Carousel.Caption>
      //         </Carousel.Item>
      //         <Carousel.Item className="slide-two">
      //             <div className="container">
      //                 <div className="row">
      //                     <h1 className="secondSlidetit"> Our Team  </h1>
      //                     <Card style={{ width: '30rem' }} className="subCont" >
      //                         <Card.Img variant="top" className="imgs" src={image1} />
      //                         <Card.Body className="cardText">
      //                             <Card.Title>Abdallah Alabed </Card.Title>
      //                             <Card.Text>
      //                                 A Full-Stack Developer with background in  Engineering
      //                             </Card.Text>
      //                         </Card.Body>
      //                     </Card>
      //                     <Card style={{ width: '18rem' }} className="subCont">
      //                         <Card.Img variant="top" className="imgs" src={image2} />
      //                         <Card.Body className="cardText">
      //                             <Card.Title>dina abuzenah </Card.Title>
      //                             <Card.Text>
      //                                 A Full-Stack Developer with background in Civil Engineering.
      //                             </Card.Text>
      //                         </Card.Body>
      //                     </Card>
      //                     <Card style={{ width: '18rem' }} className="subCont">
      //                         <Card.Img variant="top" className="imgs" src={image3} />
      //                         <Card.Body className="cardText">
      //                             <Card.Title>Ehab Al-shrida</Card.Title>
      //                             <Card.Text>
      //                                 A Full-Stack Developer with background in Telecom Engineering.
      //                             </Card.Text>
      //                         </Card.Body>
      //                     </Card>
      //                     <Card style={{ width: '18rem' }} className="subCont">
      //                         <Card.Img variant="top" className="imgs" src={image4} />
      //                         <Card.Body className="cardText">
      //                             <Card.Title>Mohammad Alwrekat </Card.Title>
      //                             <Card.Text>
      //                                 A Full-Stack Developer .
      //                             </Card.Text>
      //                         </Card.Body>
      //                     </Card>
      //                     <Card style={{ width: '18rem' }} className="subCont">
      //                         <Card.Img variant="top" className="imgs" src={image5} />
      //                         <Card.Body className="cardText">
      //                             <Card.Title>Rand Albqour</Card.Title>
      //                             <Card.Text>
      //                                 A Full-Stack Developer with background in Civil Engineering.
      //                             </Card.Text>
      //                         </Card.Body>
      //                     </Card>
      //                     <Card style={{ width: '18rem' }} className="subCont">
      //                         <Card.Img variant="top" className="imgs" src="https://scontent.famm9-1.fna.fbcdn.net/v/t1.6435-9/131928196_4598959873453247_7523781822178262359_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEZqpmb06qcSET88jEGsgMOC-b6uCGA26wL5vq4IYDbrFfUlUT10qp0GR_Qg_qAwL4&_nc_ohc=4n0VS305Qf4AX_-6PiM&_nc_ht=scontent.famm9-1.fna&oh=526e2da53836c8580ef03877ec69bd48&oe=617982F6" />
      //                         <Card.Body className="cardText">
      //                             <Card.Text className="lastCard">
      //                             <strong> So! wanna Join Us?!</strong>
      //                             </Card.Text>
      //                         </Card.Body>
      //                     </Card>
      //                 </div>
      //             </div>
      //             <Carousel.Caption>
      //                 <p> Our Story  </p>
      //             </Carousel.Caption>
      //         </Carousel.Item>

      //     </Carousel>
      // </div>

      <Carousel>
        <Carousel.Item interval={null}>
          <img
            className="d-block w-100"
            className="img1"
            src="https://images4.alphacoders.com/924/924437.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="page1_1">
            <h2>Let's Start a New Trend To Saving Earth</h2>
            <p className="para1">
              We Are Responsible for the planet we live on, and from that
              responsibility our idea "Yalla Bike!" aims to raise the number of
              people who use bicycle as their way of transportation to help
              reduce the gases of cars and do a light workout that will help
              them to live longer!{" "}
            </p>
          </Carousel.Caption>
          <Carousel.Caption className="page1_2">
            <h2>Our Mission</h2>
            <p className="para2">
              {" "}
              convince people to use gas-free vehicles to fight again pollution
              in jordan firstly and the world secondly, and enrich the idea of
              no-carbon transportation for the upcoming youth generation!{" "}
            </p>
          </Carousel.Caption>
          <Carousel.Caption className="h2Right">
            <h2>Our Vision</h2>
            <p className="para2">
              {" "}
              Expand Wider to allow our community to grow and help even more in
              saving the world! we are planning to make the renting feature
              available in all of jordan and hopefully the rest of the world so
              we can save the planet no matter where were we!
            </p>
          </Carousel.Caption>
          <Carousel.Caption>
            <p className="team">Meet The Team</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={null}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
            className="img2"
          />
          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="abdCard">
              <Card.Img variant="top" src={image1} style={{height:"13rem"}}/>
              <Card.Body style={{height:"13rem"}}>
              <br/>
                <Card.Title className="titleCardUS">Abdallah Alabed</Card.Title>
                <Card.Text>
                   Mechatronics Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>

          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="mhmdCard">
              <Card.Img variant="top" src={image4} style={{height:"13rem"}}/>
              <Card.Body style={{height:"13rem"}}>
                <br/>
                <Card.Title className="titleCardUS"> Mohammad Alwrekat </Card.Title>
                <Card.Text>
                  Creative Designer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>

          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="dinaCard">
              <Card.Img variant="top" src={image2} style={{height:"13rem"}}/>
              <Card.Body style={{height:"13rem"}}>
              <br/>
                <Card.Title className="titleCardUS"> dina abuzenah </Card.Title>
                <Card.Text>
                  Telecommunication Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>

          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="ehabCard">
              <Card.Img variant="top" src={image3} style={{height:"13rem"}}/>
              <Card.Body style={{height:"13rem"}}>
              <br/>
                <Card.Title className="titleCardUS"> Ehab Al-shrida </Card.Title>
                <Card.Text>
                  Telecommunication Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>

          <Carousel.Caption>
            <Card style={{ width: "16rem" }} className="randCard">
              <Card.Img variant="top" src={image5} style={{height:"13rem"}}/>
              <Card.Body style={{height:"13rem"}}>
              <br/>
                <Card.Title className="titleCardUS"> Rand Albqour </Card.Title>
                <Card.Text>
                  Civil Engineer and a Future Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
          <Carousel.Caption>
          <h2 className="bottomPara">The Team That Paved The Way</h2>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
    );
  }
}

export default AboutUs;

