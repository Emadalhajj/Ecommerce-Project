import React from "react";
import { Container } from "react-bootstrap";

export default function Main() {
  return (
    <Container fluid  style={{
        backgroundImage:`url('/images/bg2.jpg')`,
        backgroundSize:"cover",
        height:"100vh",
        width:"100%",
        
        textAlign : "center"

        

        
        }} className="min-hv-50 rounded fs-4  text-light py-5">
      <h2>Welcome to our store</h2>
      <span>
        Welcome to our store! Discover a wide range of high-quality products at
        competitive prices, all in one place. Enjoy a seamless shopping
        experience with fast delivery and exclusive deals.
      </span>
    </Container>
  );
}
