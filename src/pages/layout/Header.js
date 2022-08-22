import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/" className="nav-link">
          <Navbar.Brand>Bike Shop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link to="/products" className="nav-link">
              All products
            </Link>
            <NavDropdown title="Mountain" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Full Suspension
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hardtail</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Downhill</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Road" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Performance</NavDropdown.Item>
              <NavDropdown.Item href="#action4">All-Road</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Drop bar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="City" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Commuter</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Folding and compact
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Cruiser</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="E-Bikes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Electric Hybrid
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Electric Road</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Electric Mountain
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Kids" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                12" Wheel (78 - 94cm)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                16" Wheel (84 - 112cm)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                20" Wheel (108 - 129cm)
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accessories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Helmet</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lights</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Pumps</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Locks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav>
            <Nav.Link href="/">
              <div className="d-flex align-items-center">
                <i className="fa-solid fs-3 pt-1 fa-circle-user"></i>{" "}
                <span className="ml-2">login/signup</span>
              </div>
            </Nav.Link>
            <Nav.Link href="/">
              <i className="fa-solid fs-3 pt-1 fa-cart-arrow-down"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
