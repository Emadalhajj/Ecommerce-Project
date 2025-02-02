import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/authSlice";
import Swal from "sweetalert2";
import logIn from "../redux/actions/Reducers/reduceUser";
import {UserSing} from "../redux/actions/allAction";
import {addUser} from '../redux/actions/allAction'
import { Stroller } from "@mui/icons-material";


export default function SignIn() {
  // const { errorMessage, seterrorMessage } = useState("");

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();



  const dispatch = useDispatch();
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')




  function handleLogin(e) {
  

    // e.preventDefault();
    // const enteredEmil = emailRef.current.value ? emailRef.current.value : "";
    // const enteredpassword = passwordRef.current.value
    //   ? passwordRef.current.value
    //   : "";
    // if (enteredEmil && enteredpassword) {
    //   dispatch(UserSing({ enteredEmil, enteredpassword }));
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "You have logged in successfully",
    //     showConfirmButton: false,
    //     timer: 1000,
    //   });
    //   navigate("/homePage");
    // } else {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "All fields are required!",
    //     showConfirmButton: true,
    //   });
    // }

    e.preventDefault()

    const currantUser = JSON.parse(localStorage.getItem('users')) || []
    
    
    const action = UserSing(email , password)

    const foundUser = currantUser.find(
      (user) =>
        user.userName.email === email.trim() && user.userName.password === password.trim()
    );
        
    console.log('currantUser' , currantUser);
    console.log('fuondUser' , foundUser);
    if(foundUser){
      dispatch(UserSing(email , password))
      Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have logged in successfully",
            showConfirmButton: false,
            timer: 1000,
          });

            navigate("/homePage");

    }else {
         Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: action.payload,
        });
    }
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
            <h3 className="mb-4">Log in to Exclusive </h3>
            <p className="text-muted mb-4">Enter your details below</p>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Control
                  // ref={emailRef}
                  value={email}
                  type="email"
                  placeholder="enter your Email "
                  className="border-0 border-bottom"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  // ref={passwordRef}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="border-0 border-bottom"
                />
              </Form.Group>
              <Button type="submit" className="w-100 mb-3" variant="danger">
                Login
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
              Already have an account? <Link to={"/signUpPage"}>Sign Up</Link>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
