import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAPI, handleAddtocard } from "../redux/actions/allAction";
import { Bolt } from "@mui/icons-material";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { handleRemoveFcard, updateQuantity } from "../redux/actions/allAction";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Products() {
  const fetchdataAPI = useSelector((state) => state.red2.productlist);
  // console.table(fetchdataAPI);
const navigate = useNavigate();
  const dispatch = useDispatch();

    const handleAddToCard = (ItemsId)=>{
      toast.success(`${ItemsId.title} added to cart!`, {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#333',
          color: '#fff',
        },
      });
      
       dispatch(handleAddtocard(ItemsId))
       
 
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
         {fetchdataAPI.map((item) => (
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
                   <Link to={`/products/${item.id}`} className="btn btn-dark me-3">
                     By Now
                   </Link>
                   <Link onClick={()=>{handleAddToCard(item)}} className="btn btn-dark " variant="dark">Add To Cart</Link>
                 </div>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
     </Container>
  );
}
