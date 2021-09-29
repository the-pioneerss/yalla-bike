import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
export class Footer extends Component {
  render() {
    return (
      <>
        <div class='navbarr'>
          <br></br>
          <Navbar id="responsive-navbar-nav">
            <Container>
              <Navbar.Brand id='fontlo' href="#home">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/706/706170.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Yalla Bike</Navbar.Brand>
              <Nav.Link id='navFooter' tag={Link} to="/home" href="/home">Home</Nav.Link>
              <Nav.Link id='navFooter' tag={Link} to="/event" href="/event">Events</Nav.Link>
              <Nav.Link id='navFooter' tag={Link} to="/rent" href="/rent">Yalla Rent</Nav.Link>
              <Nav.Link id='navFooter' tag={Link} to="/aboutus" href="/aboutus">About Us</Nav.Link>
              <Nav.Link></Nav.Link>
            </Container>
          </Navbar>
        </div>
        <div class='navbarr'>
          <br></br><br></br>
        </div>
        <div class='navbarr'>
          <Navbar id="responsive-navbar-nav">
            <Container>
              <Navbar.Brand target="_blank" href="https://github.com/the-pioneerss" id='font'>
              </Navbar.Brand>
              <Nav.Link target="_blank" href="https://github.com/the-pioneerss" id='font'>
                All Rights Reserved . The-Pioneers-Team © 2021
              </Nav.Link>
              <Nav.Link target="_blank" href="https://github.com/the-pioneerss"></Nav.Link>
            </Container>
          </Navbar>
          <br></br></div>
      </>
    )
  }
}
export default Footer