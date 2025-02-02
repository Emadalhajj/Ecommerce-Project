import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { deleteCard, updateQuantity } from "../redux/cart/cartSlice";
import { handleRemoveFcard, updateQuantity } from "../redux/actions/allAction";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const prodectList = useSelector((state) => state.reducerCrad.card) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  localStorage.setItem("ProductsCard", JSON.stringify(prodectList));

  console.log("prodectList", prodectList);

  const [cartItems, setCartItems] = useState(prodectList);

  const handleQuantityChange = (id, quantity) => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
      console.error("Invalid quantity:", quantity);
      return;
    }
    dispatch(updateQuantity({ id, qty }));
    // console.log("Dispatching updateQuantity:", { id, qty: parseInt(quantity) });
  };

  const handleRemoveItem = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // حذف العنصر من Redux Store
        dispatch(handleRemoveFcard(id));

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been removed.",
          icon: "success",
        });
      }
    });
  };

  const calculateSubtotal = () => {
    return prodectList
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  };

  // go to checkout page
  const handleCheckout = () => {
    navigate("/#");
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <div className="table-responsive">
              <table className="table border-0">
                <thead>
                  <tr className="border-bottom">
                    <th className="text-start">Product</th>
                    <th className="text-start">Price</th>
                    <th className="text-start">Quantity</th>
                    <th className="text-start">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {prodectList.map((item) => (
                    <tr
                      key={item.id}
                      className="align-middle border-bottom bg-white"
                    >
                      {/* العمود الأول: المنتج */}
                      <td
                        style={{ position: "relative" }}
                        className="d-flex align-items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="me-3"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div>
                          {item.title}
                          <Button
                            onClick={() => {
                              handleRemoveItem(item.id);
                            }}
                            variant="danger"
                            size="sm"
                            className="ms-3"
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              position: "absolute",
                              top: "-15px",
                              left: "-15px",
                            }}
                          >
                            x
                          </Button>
                        </div>
                      </td>

                      {/* العمود الثاني: السعر */}
                      <td>${item.price}</td>

                      {/* العمود الثالث: الكمية */}
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() =>
                              handleQuantityChange(item.id, item.qty + 1)
                            }
                          >
                            +
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                            className="form-control text-center mx-2"
                            style={{ width: "70px", borderRadius: "5px" }}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() =>
                              handleQuantityChange(item.id, item.qty - 1)
                            }
                            disabled={item.qty <= 1}
                          >
                            -
                          </button>
                        </div>
                      </td>

                      {/* العمود الرابع: الإجمالي الفرعي */}
                      <td>${item.price * item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Button
              onClick={() => (window.location.href = "/homePage")}
              variant="outline-dark"
              className="me-2"
            >
              Return To Shop
            </Button>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="outline-dark">Update Cart</Button>
          </Col>
        </Row>
        <Row>
          {/* إدخال الكوبون */}
          <Col md={6} className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Coupon Code"
              style={{ marginRight: "10px" }}
            />
            <Button variant="danger">Apply</Button>
          </Col>

          {/* تفاصيل المجموع */}
          <Col md={6}>
            <Card className="p-3">
              <h5>Cart Total</h5>

              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <hr />

              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Total:</span>
                <span style={{ fontWeight: "bold" }}>
                  ${calculateSubtotal()}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                variant="dark"
                className="w-100 mt-3"
              >
                Proceed to checkout
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
