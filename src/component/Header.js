import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/fav">Favarouite</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
