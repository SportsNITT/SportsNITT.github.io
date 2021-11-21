import * as React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import '../index.css'
export default function NavbarMain() {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark" style={{maxWidth:window.inn}}>
    <Container style={{alignItems:"center"}}>
      <Navbar.Brand href="/" style={{color:"white"}}>
        Sports contigent NITT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto" style={{display:"flex", justifyContent:"space-around"}}>
          <Nav.Link href="/" style={{color:"white", paddingInline:50}}>Home</Nav.Link>
          <Nav.Link href="/achievements" style={{color:"white", paddingInline:50}}>Achievements</Nav.Link>
          <Nav.Link href="/blogs" style={{color:"white", paddingInline:50}}>Blogs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

