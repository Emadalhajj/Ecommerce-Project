import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="my-5">
           <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb justify-content-start">
              <li className="breadcrumb-item">
                <a href="/homePage" className="text-muted">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
      <Row>
        {/* قسم الاتصال بنا */}
        <Col md={5} className="mb-4">
          <div className="p-4 border rounded shadow-sm">
            {/* Call To Us */}
            <div className="d-flex align-items-start mb-4">
              <i
                className="bi bi-telephone-fill text-danger"
                style={{ fontSize: "2rem", marginRight: "1rem" }}
              ></i>
              <div>
                <h5>Call To Us</h5>
                <p className="mb-1">We are available 24/7, 7 days a week.</p>
                <p className="fw-bold">Phone: +8801611112222</p>
              </div>
            </div>

            <hr />

            {/* Write To Us */}
            <div className="d-flex align-items-start">
              <i
                className="bi bi-envelope-fill text-danger"
                style={{ fontSize: "2rem", marginRight: "1rem" }}
              ></i>
              <div>
                <h5>Write To Us</h5>
                <p className="mb-1">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="mb-0">Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </Col>

        {/* نموذج الرسالة */}
        <Col md={7}>
          <div className="p-4 border rounded shadow-sm">
            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formName">
                    <Form.Control
                    style={{backgroundColor:"#80808029",
                        border:"none"
                    }}
                      type="text"
                      placeholder="Your Name *"
                      className="py-3"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Control
                    style={{backgroundColor:"#80808029",
                        border:"none"
                    }}
                      type="email"
                      placeholder="Your Email *"
                      className="py-3"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formPhone">
                    <Form.Control
                    style={{backgroundColor:"#80808029",
                        border:"none"
                    }}
                      type="text"
                      placeholder="Your Phone *"
                      className="py-3"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control
                style={{backgroundColor:"#80808029",
                    border:"none"
                }}
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button variant="danger" className="w-100 py-3">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
