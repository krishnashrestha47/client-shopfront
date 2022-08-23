import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

export const Cart = () => {
  return (
    <div className="main mt-5">
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex ">
                  <div className="m-1">
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src="https://www.99bikes.com.au/media/catalog/product/2/1/21norcofluidfs229orangecharcoalv2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6>Title</h6>
                    <p>$1299</p>

                    <Button className="btn-sm" variant="danger">
                      Remove
                    </Button>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex">
                  <Button className="btn-sm m-1">-</Button>
                  <span className="fs-5">2</span>
                  <Button className=" btn-sm m-1">+</Button>
                </div>
              </td>
              <td>$2598</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
