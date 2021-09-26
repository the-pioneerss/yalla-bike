import React, { Component } from 'react';
import { Offcanvas, NavDropdown, Button, Image, Col, Row, Container, Navbar, Nav } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogOutButton';
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { setShow: false }
  }
  handleShow = () => { this.setState({ setShow: true }) }
  handleClose = () => { this.setState({ setShow: false }) }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="true" bg={this.props.colorThems} variant={this.props.fontColor}>
          <Container>
            <Navbar.Toggle onClick={this.handleShow} aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="#home" id='fontoff'>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/706/706170.png"
                width="27"
                height="27"
                className="d-inline-block align"
              />{' '}
              Yalla Bike {' '}
              <NavDropdown className="d-inline-block align" title={<img src='https://cdn-icons-png.flaticon.com/512/5721/5721101.png' width='35' height='30' />
              } id="navbarScrollingDropdown">
                <NavDropdown.Item style={{ height: 50 }} href="#action3" onClick={this.props.handleGreen} id='GREEN'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleRed} id='RED'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleYellow} id='YELLOW'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleDark} id='DARK'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleLight} id='LIGHT'> </NavDropdown.Item>
                <NavDropdown.Item href="#action3" style={{ height: 50 }} onClick={this.props.handleBlue} id='BLUE'> </NavDropdown.Item>
              </NavDropdown>
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
                        <Button id='navsbu' variant="#E05D5D">
                          Events
                        </Button>
                        <br></br>
                        <Button id='navsbu' variant="#E05D5D">
                          Yalla Rent
                        </Button>
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
                            <p>{this.props.tokenz} 💰<b>Tokenz</b></p>
                            <br></br>
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
      </>
    )
  }
}
export default withAuth0(Header);