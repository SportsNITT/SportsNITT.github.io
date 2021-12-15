import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../index.css'
export default function NavbarMain() {
  const social = [
    { name: 'GitHub', icon: GitHubIcon, link: "" },
    { name: 'Twitter', icon: TwitterIcon, link: "" },
    { name: 'Facebook', icon: FacebookIcon, link: "" },
  ]
  return (
    <Navbar bg="transparent" expand="lg" variant="dark" style={{ maxWidth: window.inn }}>
      <Container style={{ alignItems: "center" }}>
        <Navbar.Brand href="/" style={{ color: "#ff8b00", marginLeft: 10, fontFamily: "Open Sans", fontWeight: 900, textTransform: "uppercase" }}>
          Sports contigent
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" style={{ display: "flex", justifyContent: "space-around", padding: 13 }}>
            <Nav.Link href="/" style={{ color: "white", paddingInline: 30, fontFamily: "Open Sans" }}>Home</Nav.Link>
            <Nav.Link href="/achievements" style={{ color: "white", paddingInline: 30, fontFamily: "Open Sans" }}>Achievements</Nav.Link>
            <Nav.Link href="/blogs" style={{ color: "white", paddingInline: 30, fontFamily: "Open Sans" }}>Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div style={{ display: "flex", flexDirection: "row", float: "right", marginLeft: 10 }}>
          <Nav.Link href={social[0].link} style={{ color: "#6B6B6B", paddingInline: 10, fontFamily: "Open Sans", marginLeft: 20 }}><GitHubIcon /></Nav.Link>
          <Nav.Link href={social[1].link} style={{ color: "#6B6B6B", paddingInline: 10, fontFamily: "Open Sans" }}><TwitterIcon /></Nav.Link>
          <Nav.Link href={social[2].link} style={{ color: "#6B6B6B", paddingInline: 10, fontFamily: "Open Sans" }}><FacebookIcon /></Nav.Link>
        </div>
      </Container>

    </Navbar>
  );
}

