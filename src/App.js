import { React, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./styles/App.css";


import Button from "@mui/material/Button";
import NavBar from "./Components/Navbar";


import HomePage from "./Pages/HomePage";

import SignUpPage from "./Pages/SignUp";
import Header from "./Components/Header";
import SignIn from "./Pages/Login";
import CartPage from "./redux/cart/Cart";
import Footer from "./Pages/Footer";
import FavoritesPage from "./redux/favorites/FavoritesPage";

// import CheckoutPage from "./Pages/CheckoutPage";

import About from "./Pages/About";
import ContactUs from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products";

const App = () => {
  return (
    <div className="container-fluid">
      {/* <Header /> */}
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        {/* <Route path="/header" element={<Header/>}></Route> */}
        <Route path="/homePage" element={<HomePage />}></Route>
        <Route path="/signUpPage" element={<SignUpPage />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/cartPage" element={<CartPage />}></Route>
        <Route path="/favoritesPage" element={<FavoritesPage />}></Route>
        <Route path="/contactUs" element={<ContactUs/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
    
    
      </Routes>
      {/* <Button onClick={() => Navigate("/home")}>Back to Home</Button> */}
      <Footer />
      {/* <ProductDetails/> */}
    </div>
  );
};

export default App;
