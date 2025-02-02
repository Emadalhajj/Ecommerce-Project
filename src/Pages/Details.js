import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchDataAPI,
  handleAddtocard,
  handleShowDetails,
} from "../redux/actions/allAction";
import { Height } from "@mui/icons-material";
import { width } from "@mui/system";
import { reducerCrad } from "../redux/actions/Reducers/index";
// import Products from "./Products";
import Marquee from "react-fast-marquee";

export default function Details() {
  const AllProdcuts = useSelector((state) => state.red2.productlist);
  // console.log("prodcutstest" , prodcuts);

  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("producttttt", product);

  useEffect(() => {
    // dispatch((handleShowDetails(parseInt(id))))
    const getProduct = async () => {
      setLoading(true);

      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());

      setLoading(false);
    };
    getProduct();
  }, [id]);

  // ا
  if (loading) {
    return (
      <Container className="text-center">
        <p>Loading product details...</p>
      </Container>
    );
  }

  // add to card
  
     const handleAddToCard = (id)=>{
       dispatch(handleAddtocard(id))
       
 
     }
  return (
    <>
      <Container>
        <Col className="d-flex">
          <div className="py-5 ">
            <img
              style={{ width: "100%", maxWidth: "500px", objectFit: "contain" }}
              src={product.image || "default-image-path.jpg"}
              alt={product.title || "Product"}
              className="img-fluid"
            />
          </div>

          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="p-4">
                <Card.Body>
                  {/* عنوان المنتج */}
                  <Card.Title className="fs-2 fw-bold">
                    {product.title}
                  </Card.Title>

                  {/* التقييم */}
                  <div className="d-flex align-items-center mb-3">
                    <span className="fs-5 me-2">4.1</span>
                    <span className="text-warning">★★★★</span>
                  </div>

                  {/* السعر */}
                  <Card.Text className="fs-3 fw-bold text-primary mb-3">
                    {product.price}
                  </Card.Text>

                  {/* الوصف */}
                  <Card.Text className="text-muted mb-4">
                    {product.description}
                  </Card.Text>

                  {/* الأزرار */}
                  <div className="d-flex gap-3">
                    <Button onClick={() => handleAddToCard(product)} variant="dark">
                      Add- to Cart
                    </Button>
                    <Link className="btn btn-dark" to={"/cartPage"} variant="outline-dark">
                      Go to Cart
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Container>
      <h2 className="br-3"> Your May Lose Like</h2>
      <Marquee className="py-5" speed={50} gradient={false}>
        {AllProdcuts.map((product) => (
          <div key={product.id} style={{ margin: "0 20px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "250px", height: "250px" }}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </Marquee>
    </>
  );
}
