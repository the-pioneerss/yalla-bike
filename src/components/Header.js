import React, { Component } from 'react';
import {NavDropdown, Image, Col, Row, Offcanvas, Button, Container, Navbar, Nav } from 'react-bootstrap';
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
  /*
Copy
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
  */
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="true" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" id='fontoff'>Yalla Bike</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Events</Nav.Link>
      <Nav.Link href="#pricing">Yalla Rent</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">
      {this.props.auth0.isAuthenticated ? <>
                            <br></br>
                            <Container>
                              <Row>
                                <Col xs={6} md={2}>
                                </Col>
                                <Col md={8}>
                                  <Image width="20%" src={this.props.picture} roundedCircle />
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