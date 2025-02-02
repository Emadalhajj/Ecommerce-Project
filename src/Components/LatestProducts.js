import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";


export default function LatestProducts() {
  const fetchdataAPI = useSelector((state) => state.red2.productlist);
  const dispatch = useDispatch();
  // console.log("fetchdataAPI", fetchdataAPI);
  const navgite = useNavigate();


  const hanedleShowall = () => {
    navgite("allProducts");
  };
  const handleShowMen = () => {
    navgite("menClothing");
  };
  const handleShowWemen = () => {
    navgite("WemensClothing");
  };
  const handleShowJewelery = () => {
    navgite("jewelery");
  };
  const handleShowEletorincs = () => {
    navgite("electronicsProducts");
  };
  useEffect(()=>{
    hanedleShowall()
  },[])

  return (
    <Container className="mx-auto" style={{ textAlign: "center" }}>
      <h2 className=" text-center">Latest Products</h2>

      <hr></hr>
      <Col className="gap-2 py-5 ">
      <Button onClick={handleShowMen} className="me-2 outline-dark bg-light text-dark fw-bold">
  All
</Button>
        <Button onClick={handleShowMen} className="me-2 bg-light text-dark fw-bold">
          Men's clothing
        </Button>
        <Button onClick={handleShowWemen} className="me-2 bg-light text-dark fw-bold">
          Wemen's clothing
        </Button>
        <Button onClick={handleShowJewelery} className="me-2 bg-light text-dark fw-bold">
          Jewelery
        </Button>
        <Button onClick={handleShowEletorincs} className="me-2 bg-light text-dark fw-bold">
          Eletorincs
        </Button>
      </Col>
      <div>


        <Outlet />
      </div>
    </Container>
  );
}
