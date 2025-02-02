import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { isAction } from "redux";

export default function About() {
 

  return (
    <Container className="my-5">
      {/* قسم About Us */}
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">About Us</h1>
          <hr></hr>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
          </p>
        </Col>
      </Row>

      {/* قسم Our Products */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Our Products</h2>
          <Row>
        {/* Men's Clothing */}
        <Col md={3} className="mb-4">
          <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/men.png'} />
          <Card.Body>
              <Card.Title>Men's Clothing</Card.Title>
              <Card.Text>
                Explore our latest collection of men's clothing.
              </Card.Text>
            
            </Card.Body>
          </Card>
        </Col>

        {/* Women's Clothing */}
        <Col md={3} className="mb-4">
          <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/w1.png'} />
          <Card.Body>
              <Card.Title>Women's Clothing</Card.Title>
              <Card.Text>
                Discover trendy and stylish women's clothing.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>

        {/* Jewelery */}
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/j.png'} />
            <Card.Body>
              <Card.Title>Jewelery</Card.Title>
              <Card.Text>
                Find exquisite jewelery pieces for every occasion.
              </Card.Text>
           
            </Card.Body>
          </Card>
        </Col>

        {/* Electronics */}
        <Col md={3} className="mb-4">
          <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/e.png'} />
          <Card.Body>
              <Card.Title>Electronics</Card.Title>
              <Card.Text>
                Check out the latest in electronics and gadgets.
              </Card.Text>
          
            </Card.Body>
          </Card>
        </Col>
      </Row>

        </Col>
      </Row>
    </Container>
  );
  
}
