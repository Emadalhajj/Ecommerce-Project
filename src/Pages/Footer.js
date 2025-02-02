import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-strat py-3 " style={{marginBottom:"0px" , backgroundColor: "#000", color: "#fff", padding: "40px 0" }}>
      <Container>
        {/* Footer Content */}
        <Row  >
          {/* Column 1: Exclusive */}
          <Col md={3}>
            <h5>Exclusive</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
                style={{
                  borderRadius: "0",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                  color: "#fff",
                }}
              />
              <Button variant="outline-light" style={{ borderRadius: "0" }}>
                <i className="bi bi-arrow-right"></i>
              </Button>
            </Form>
          </Col>

          {/* Column 2: Support */}
          <Col md={3}>
            <h5>Support</h5>
            <p>111 Makkah city, Dhaka, DH 1515, ksa.</p>
            <p>exclusive@gmail.com</p>
            <p>+966-56643-8781</p>
          </Col>

          {/* Column 3: Account */}
          <Col md={2}>
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </Col>

          {/* Column 4: Quick Link */}
          <Col md={2}>
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Column 5: Download App */}
          <Col md={2} className="justify-content-strat align-items-center">
            <h5>Download App</h5>
            <p>Save $3 with App New User</p>
            <div className="d-flex mb-2">
              <img
                src="/images/download.png"
                alt="QR Code"
                className="me-2"
                style={{
                  objectFit:"contain",
                width :'180px'
                }}
              />
              {/* <div>
                <img
                  src="https://via.placeholder.com/100x30"
                  alt="Google Play"
                  className="mb-2"
                />
                <img
                  src="https://via.placeholder.com/100x30"
                  alt="App Store"
                />
              </div> */}
            </div>
            <div className="d-flex ceualMidia">
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-twitter me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <hr className="w-100"/>
        <div className="text-center mt-2" style={{  paddingTop: "5px" }}>
          <p>© Copyright Eng.Emad 2025. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
