import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
export class Footer extends Component {
  
  render() {
    return (
      <>
        <div class='navbarr'>
        <Navbar id="responsive-navbar-nav">
          <Container>
            <Navbar.Brand class='font' href="#home">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/706/706170.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Yalla Bike</Navbar.Brand>
            <Nav.Link target="_blank" href="https://github.com/the-pioneerss"><p class='font'>All Reserved CopyRight . © The-Pioneers</p></Nav.Link>
          </Container>
        </Navbar>
        </div>
      </>
      
    )
  }
}
export default Footer