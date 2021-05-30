import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar() {
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop >= 80 ||
        document.documentElement.scrollTop >= 80
      ) {
        navbar.current.classList.remove("bg-transparent");
        navbar.current.classList.add("bg-light");
      } else {
        navbar.current.classList.remove("bg-light");
        navbar.current.classList.add("bg-transparent");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleNavbar = () => {
    navbar.current.classList.remove("bg-transparent");
    navbar.current.classList.add("bg-light");
  };

  return (
    <Navbar
      ref={navbar}
      collapseOnSelect
      expand="md"
      className="bg-transparent px-2 fixed-top"
    >
      <Navbar.Brand href="#home">
        {" "}
        <img src="/LOGO.svg" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={handleNavbar}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="me-auto text-lg md:text-sm">
          <Nav.Link href="#features">Sell</Nav.Link>
          <Nav.Link href="#pricing">Marketplace</Nav.Link>
          <Nav.Link href="#pricing">Community</Nav.Link>
          <Nav.Link href="#pricing">Develop</Nav.Link>
          <Nav.Link href="#pricing">Resources</Nav.Link>
        </Nav>
        <Nav className="w-auto">
          <button className="bg-transparent p-1 border-0">Login</button>
          <button className="p-1 px-2 rounded border-0 nav-btn  mx-md-2">
            Get Started
          </button>
          <img
            className="d-none d-md-block"
            src="/images/icon-search.svg"
            style={{ width: "1rem" }}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
