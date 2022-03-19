import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

export default function NavBar() {
  return (
    <>
      <Navbar
        bg=""
        variant="light"
        expand="lg"
        className="mb-3"
        style={{ fontWeight: "500" }}
      >
        <Container fluid>
          <Navbar.Brand href="/">SÍMERA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
