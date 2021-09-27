import React, { Component } from 'react';
import { Offcanvas, Button, Image, Col, Row, Container, Navbar, Nav } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogOutButton';
import { Link } from 'react-router-dom';
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { setShow: false }
  }
  handleShow = () => { this.setState({ setShow: true }) }
  handleClose = () => { this.setState({ setShow: false }) }
  /*
bg='dark' variant='dark'
  */
  render() {
    return (
      <>
      <div class='navbarr'>
        <Navbar collapseOnSelect expand="true"  id="responsive-navbar-nav">
          <Container>
          <Navbar.Brand href="#home" id="responsive-navbar-nav">                    <Navbar.Toggle onClick={this.handleShow} aria-controls="responsive-navbar-nav"/>
          <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/706/706170.png"
                    width="27"
                    height="27"/>{' '}
                    {' '}Yalla Bike{' '}
            </Navbar.Brand>                                   
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav placement={'bottom'} className="me-auto">
                <Nav.Link href="#pricing" id='hov'>
                  <>
                    <Offcanvas id={this.props.idColor} style={{ width: 300 }} show={this.state.setShow} onHide={this.handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='fontoff'>Yalla Bike</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                      <Nav.Link id='rou' tag={Link} to="/home" href="/home">Home</Nav.Link>

                        <Nav.Link id='rou' tag={Link} to="/event" href="/event">Events</Nav.Link>
                        
                        <Nav.Link id='rou' tag={Link} to="/rent" href="/rent">Yalla Rent</Nav.Link>
                        <Nav.Link id='rou' tag={Link} to="/aboutus" href="/aboutus">About Us</Nav.Link>
                        {this.props.auth0.isAuthenticated ? <>
                          <br></br>
                          <Container>
                            <Row>
                              <Col xs={6} md={2}>
                              </Col>
                              <Col md={8}>
                                <Image width="100%" src={this.props.picture} roundedCircle />
                              </Col>
                              <Col xs={6} md={2}>
                              </Col>
                            </Row>
                          </Container>
                          <br></br>
                          <div id='userInfo'>
                            <h5><b>{this.props.name}</b></h5>
                            <a id='userMail' href={this.props.myEmail}><b><i>{this.props.myEmail}</i></b></a>
                            <br></br><br></br>
                            <LogoutButton />
                          </div></>
                          : <></>
                        }
                        <br></br>
                        {this.props.auth0.isAuthenticated ? <></> : <LoginButton />}
                      </Offcanvas.Body>
                    </Offcanvas>
                  </>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      </>
    )
  }
}
export default withAuth0(Header);
/*
              <NavDropdown className="d-inline-block align" title={<img src='https://cdn-icons-png.flaticon.com/512/5721/5721101.png' width='35' height='30' />
              } id="navbarScrollingDropdown">
                <NavDropdown.Item style={{ height: 50 }} href="#action3" onClick={this.props.handleGreen} id='GREEN'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleRed} id='RED'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleYellow} id='YELLOW'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleDark} id='DARK'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleLight} id='LIGHT'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleBlue} id='BLUE'> </NavDropdown.Item>
              </NavDropdown>
                          <Navbar.Brand href="#home" id='fontoff'>
            </Navbar.Brand>
             <Navbar.Toggle onClick={this.handleShow} aria-controls="responsive-navbar-nav"> 
                    <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/706/706170.png"
                    width="27"
                    height="27"
                  />
          </Navbar.Toggle>  
                        <Button id='navsbu' variant="#E05D5D">
                          Yalla Rent
                        </Button>
          */