import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff",  height:"40px" }}>
      <Container>
        <Row className="align-items-center">
          {/* الإعلان */}
          <Col md={10} xs={8}>
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <a
                href="#"
                className="text-white text-decoration-none fw-bold"
              >
                Shop Now
              </a>
            </span>
          </Col>

          {/* اختيار اللغة */}
          <Col md={2} xs={4} className="text-end">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="text-white text-decoration-none"
              >
                English
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">French</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
