import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { reduceCartItem, removeCartItem, setCartItems } from "./cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();

  const handleOnAddItem = (item) => {
    dispatch(setCartItems(item));
  };

  const handleOnDecreaseItem = (item) => {
    dispatch(reduceCartItem(item));
  };

  const handleOnRemoveItem = (item) => {
    dispatch(removeCartItem(item));
  };

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="main mt-5">
      <Container>
        {cartItems.length > 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr>
                  <td>
                    <div className="d-flex ">
                      <div className="m-1">
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={item.src[0]}
                          alt=""
                        />
                      </div>
                      <div>
                        <h6>{item.name}</h6>
                        <p>${item.price}</p>

                        <Button
                          onClick={() => handleOnRemoveItem(item)}
                          className="btn-sm"
                          variant="danger"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <Button
                        onClick={() => handleOnDecreaseItem(item)}
                        className="btn-sm m-1"
                      >
                        -
                      </Button>
                      <span className="fs-5">{item.qty}</span>
                      <Button
                        onClick={() => handleOnAddItem(item)}
                        className=" btn-sm m-1"
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>${item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h1>You don't have any items on the cart</h1>
        )}
      </Container>
    </div>
  );
};
