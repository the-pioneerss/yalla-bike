import React, { Component } from 'react';
import { Image, Col, Row, Offcanvas, Button, Container, Navbar, Nav } from 'react-bootstrap';
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
        <div class='navbarHeader'>
          <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
              <Navbar.Brand href="#home" id='font'>Yalla Bike</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">
                    <>
                      <Button id='logout' variant="asasas" onClick={this.handleShow}>
                        Menu
                      </Button>
                      <Offcanvas style={{ width: 300 }} show={this.state.setShow} onHide={this.handleClose}>
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
                <Nav>
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