import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
  <div>
      <>
  <Navbar bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">Bachchu Enterprise</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Products & Service</Nav.Link>
      <Nav.Link href="#pricing">Gallery</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
  </div>
  )
  
}

export default NavBar;