import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/auth/authSlice";
import Swal from "sweetalert2";
import { RegisterUser } from "../redux/actions/allAction";


const SignUpPage = () => {
  // const register = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handeleSignUp = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (userName && email && password) {
      dispatch(RegisterUser({ userName, email, password }))
      // .unwrap()
      // .then(() => {
     
      // })
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/signIn");
      

    }else{
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "please complate register!",
      });
  }
  };
  const authError = useSelector((state) => state.logIn.error);
if (authError) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: authError,
  });
}


  return (
    <>
      <Container className="vh-100 d-flex align-items-center">
        <Row className="w-100">
          <Col md={6} className="d-none d-md-block">
            <img
              src="/images/appel2.jpg"
              alt="Shopping and Phone"
              className="img-fluid h-100"
              style={{ objectFit: "contain" }}
            />
          </Col>
           <Col
            md={6}
            className="bg-white p-5 d-flex flex-column justify-content-center"
          >
            <h3 className="mb-4">Create an account</h3>
            <p className="text-muted mb-4">Enter your details below</p>
            <Form onSubmit={handeleSignUp}>
              <Form.Group className="mb-3">
                <Form.Control
                  ref={userNameRef}
                  type="text"
                  placeholder="Name"
                  className="border-0 border-bottom"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Email or Phone Number"
                  className="border-0 border-bottom"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  className="border-0 border-bottom"
                />
              </Form.Group>
              <Button type="submit" className="w-100 mb-3" variant="danger">
                Create Account
              </Button>
              <Button
                className="w-100 mb-4 d-flex align-items-center justify-content-center"
                variant="outline-secondary"
              >
                <img
                  src="/images/google-logo.png"
                  alt="Google"
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Sign up with Google
              </Button>
            </Form>
            <p className="text-center">
              Aready have an account?{" "}
              <Link to={'/signIn'}> Log in </Link>
                
              
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpPage;
