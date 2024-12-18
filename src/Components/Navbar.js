import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/authSlice";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";





const user = localStorage.getItem("user");

export default function NavBar() {
  const navgite = useNavigate();
  const bage = useSelector((state) => state.card); // عدد المنتجات في السلة
  const bageFavorite = useSelector((state) => state.favorite);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // console.log('cardss' , cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar  bg="light" expand="lg" className="py-3 border-bottom">
      <Container fluid>
        <div className="d-flex align-items-center">
          {/* <Navbar.Brand href="#home">E-commerce</Navbar.Brand> */}
          <Link className="nav-link" to='/homePage'>E-commerce</Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center">
            <Link className="nav-link" to="/homePage">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contactUs">
              Contact
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            {/* {!isLoggedIn && (
          <Link className="nav-link d-flex align-items-center" to="/signUpPage">
            <FontAwesomeIcon icon={faUserPlus} /> signup
          </Link>
        )} */}
          </Nav>
          <Nav>
            <Link
              className="nav-link d-flex align-items-center border rounded gap mr-1"
              to="/signUpPage"
            >
              <FontAwesomeIcon icon={faUserPlus} /> Register
            </Link>
            <Link className="nav-link border rounded" to="/signin">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
            <Link
                  style={{ position: "relative" }}
                  className="nav-link border rounded"
                  to="/cartPage"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />Card ({bage.length})
                
                </Link>
         
            {isLoggedIn ? (
              <>
            

                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    align="start"
                    style={{
                      backgroundColor: "rgba(94 77 77 / 68%)",
                      color: "#fff",
                      borderRadius: "10px",
                      minWidth: "200px",
                    }}
                  >
                    <Dropdown.Item
                      onClick={() => navgite("/myAccount")}
                      style={{
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      <i
                        className="bi bi-person"
                        style={{ marginRight: "10px" }}
                      ></i>{" "}
                      Manage My Account
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/CartPage"
                      style={{
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i
                        className="bi bi-box"
                        style={{ marginRight: "10px" }}
                      ></i>{" "}
                      My Order
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/CartPage"
                      style={{
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i
                        className="bi bi-x-circle"
                        style={{ marginRight: "10px" }}
                      ></i>{" "}
                      My Cancellations
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/reviews"
                      style={{
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i
                        className="bi bi-star"
                        style={{ marginRight: "10px" }}
                      ></i>{" "}
                      My Reviews
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={handleLogout}
                      // href="/logout"
                      style={{
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i
                        className="bi bi-box-arrow-right"
                        style={{ marginRight: "10px" }}
                      ></i>{" "}
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                {/* <Link className="navbar-brand" to="/signUpPage">
                  <FontAwesomeIcon icon={faUserPlus} />
                  signup
                </Link> */}

                {/* <Link className="nav-link" to="/signin">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link> */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
