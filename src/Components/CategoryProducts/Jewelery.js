import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddtocard } from "../../redux/actions/allAction";
import toast from "react-hot-toast";

export default function Jewelery() {
  const allProducts = useSelector((state) => state.red2.productlist);
  console.log("allProducts", allProducts);

  const category = allProducts.map((items) => items.category);
  console.log("category", category);

  const jeweleryProducts = allProducts.filter(
    (item) => item.category === "jewelery"
  );

  console.log("jeweleryProducts", jeweleryProducts);

  const dispatch = useDispatch()
  const handleAddToCard = (itemId)=>{
    toast.success(`${itemId.title} added to cart!`, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#333',
        color: '#fff',
      },
    });
    dispatch(handleAddtocard(itemId))
    

  }
  return (
    <Container className="mx-auto" style={{ textAlign: "center" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className="py-5  "
      >
        {jeweleryProducts.map((item) => (
          <Col
            lg={3}
            md={4}
            // sm={2}
            key={item.id}
            className="d-flex justify-content-center"
          >
            <Card
              style={{
                height: "450px",
                textAlign: "center",
                width: "18rem",
                marginTop: "10px",
              }}
            >
              <Card.Img
                style={{ width: "180px", height: "200px", margin: "auto" }}
                variant="top"
                src={item.image}
              />
              <Card.Body>
                <Card.Title>
                  {item.title.split(" ").slice(0, 3).join(" ")}...
                </Card.Title>
                <Card.Text>
                  {item.description.split(" ").slice(0, 3).join(" ")}{" "}
                </Card.Text>

                <hr />
                <Card.Text style={{}}>The Price : {item.price} </Card.Text>
                <hr />
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <Link
                    to={`/products/${item.id}`}
                    className="btn btn-dark me-3"
                  >
                    By Now
                  </Link>
                  <Button onClick={()=>handleAddToCard(item)} variant="dark">Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
