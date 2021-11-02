import * as React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export default function NavbarMain() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/" style={{color:"white"}}>
        Sports contigent NITT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white"}}/>
      <Navbar.Collapse id="basic-navbar-nav" style={{color:"white"}}>
        <Nav className="me-auto">
          <Nav.Link href="/" style={{color:"white"}}>home</Nav.Link>
          <Nav.Link href="/achievements" style={{color:"white"}}>achievements</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color:"white"}}>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

