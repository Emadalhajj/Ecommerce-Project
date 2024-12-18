import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/homePage"); // إعادة التوجيه إلى الصفحة الرئيسية
  };

  return (
    <Container className=" my-5">
      <Row>
        <Col>
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb justify-content-start">
              <li className="breadcrumb-item">
                <a href="/homePage" className="text-muted">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                404 Error
              </li>
            </ol>
          </nav>
          <h1 className="text-center display-1 fw-bold">404 Not Found</h1>
          <p className="text-center ">
            Your visited page not found. You may go home page.
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="danger" onClick={handleGoHome}>
              Back to home page
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
