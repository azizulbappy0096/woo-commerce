import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";


function NavBar() {
  return (
    
      <Navbar collapseOnSelect expand="md" className="bg-transparent px-2">
          <Navbar.Brand href="#home"> <img src="/LOGO.svg" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="#features">Sell</Nav.Link>
              <Nav.Link href="#pricing">Marketplace</Nav.Link>
              <Nav.Link href="#pricing">Community</Nav.Link>
              <Nav.Link href="#pricing">Develop</Nav.Link>
              <Nav.Link href="#pricing">Resources</Nav.Link>
            </Nav>
            <Nav>
              <Button className="bg-transparent px-1 py-1 border-0">
                  Login
              </Button>
              <Button className="p-1 border-0 nav-btn px-2 mx-2">
                  Get Started
              </Button>
              <img src="/images/icon-search.svg" />
            </Nav>
          </Navbar.Collapse>

      </Navbar>
     
     
  );
}

export default NavBar;
