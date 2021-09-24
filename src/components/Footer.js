import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
export class Footer extends Component {
  render() {
    return (
      <>
        <div class='navbarFooter'>
          <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
              <Navbar.Brand href="#home" id='font'>Yalla Bike</Navbar.Brand>
              <Nav.Link target="_blank" eventKey={2} href="https://github.com/the-pioneerss">
                <p class='font'>All Reserved CopyRight . © The-Pioneers</p>
              </Nav.Link>
            </Container>
          </Navbar>
        </div>
      </>
    )
  }
}
export default Footer