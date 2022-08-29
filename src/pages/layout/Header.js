import React, { useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCartItems } from "../../components/cart/cartSlice";
import "./Header.css";
import logo from "../../assets/logo.png";
import { current } from "@reduxjs/toolkit";

export const Header = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState("");

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setHovered(e.target.innerText);
    setShow(true);
  };
  const hideDropdown = (e) => {
    setHovered("");
    setShow(false);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const { categories } = useSelector((state) => state.category);

  const parentCategories = categories.filter((item) => !item.parentCatId);
  const subCategories = categories.filter((item) => item.parentCatId);

  // const handleOnParentCatClick = (pagelink) => {
  //   navigate(`/categories/${pagelink}`);
  // };

  // const handleOnChildCatClick = (cat, subcat) => {
  //   navigate(`/categories/${cat}/${subcat}`);
  // };

  return (
    <Navbar className="fw-bold" bg="light" expand="lg">
      <Container fluid>
        <Link to="/" className="nav-link">
          <Navbar.Brand>
            <img className="logo" src={logo} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link to="/products" className="nav-link">
              All products
            </Link>

            {parentCategories.map((item, i) => (
              <NavDropdown
                title={item.catName}
                // onClick={() => {
                //   handleOnParentCatClick(item.slug);
                // }}
                show={show && hovered === item.catName}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                {subCategories.map(
                  (childCat) =>
                    childCat.parentCatId === item._id && (
                      <NavDropdown.Item
                      // onClick={() =>
                      //   handleOnChildCatClick(item.slug, childCat.slug)
                      // }
                      >
                        {childCat.catName}
                      </NavDropdown.Item>
                    )
                )}
              </NavDropdown>
            ))}
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
            <Link className="nav-link" to="/checkout">
              <div className="cart-item">
                <i className="fa-solid fs-3 pt-1 fa-cart-arrow-down"></i>
                {cartItems.length > 0 ? (
                  <span className="cart">{cartItems.length}</span>
                ) : (
                  <span></span>
                )}
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
