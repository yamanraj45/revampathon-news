import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" style={{ gap:'20px'}}>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#Sports">Sports</Nav.Link>
            <Nav.Link href="#Travel">Travel</Nav.Link>
            <Nav.Link href="#Culture">Culture</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#signIn">Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
        
}

export default Header;