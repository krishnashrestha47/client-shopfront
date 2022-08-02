import React from "react";
import { Form, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand className="fs-1 fw-bold" href="/">
        BikeShop
      </Navbar.Brand>
      <div className="d-flex justify-content-around">
        <div className="nav-group">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="fs-4 my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/mountain-bikes">Mountain</Nav.Link>
              <Nav.Link href="/road-bikes">Road</Nav.Link>
              <Nav.Link href="/city-bikes">City</Nav.Link>
              <Nav.Link href="/electric-bikes">Electric</Nav.Link>
              <Nav.Link href="/kids-bikes">Kids</Nav.Link>
              <Nav.Link href="/accessories">Accessories</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className="d-flex gap-3">
          <Form.Control type="search" placeholder="Search" />
          <Nav.Link href="/">
            <i className="fa-solid fs-3 pt-2 fa-circle-user"></i>
          </Nav.Link>
          <Nav.Link href="/">
            <i className="fa-solid fs-3 pt-2 fa-cart-arrow-down"></i>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};
