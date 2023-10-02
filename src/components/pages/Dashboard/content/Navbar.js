import React from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { Navbar, Button, Nav, NavbarCollapse } from "@/lib/bootstrap";

function NavBar(props) {
  return (
    <Navbar
      className="navbar shadow-sm p-3 mb-5 rounded"
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
    >
      <Button variant="outline-warning" onClick={props.toggle}>
        {props.isOpen ? <AiFillLeftCircle size={25} /> : <AiFillRightCircle size={25}/>}
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav className="me-auto" navbar>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavBar;
