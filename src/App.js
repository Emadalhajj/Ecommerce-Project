import { React, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./styles/App.css";

import Button from "@mui/material/Button";
import NavBar from "./Components/Navbar";

import HomePage from "./Pages/HomePage";

import SignUpPage from "./Pages/SignUp";
import Header from "./Components/Header";
import SignIn from "./Pages/Login";
import CartPage from "./Pages/Cart";
import Footer from "./Pages/Footer";
import FavoritesPage from "./redux/favorites/FavoritesPage";
import { Toaster } from "react-hot-toast";

// import CheckoutPage from "./Pages/CheckoutPage";

import About from "./Pages/About";
import ContactUs from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Jewelery from "./Components/CategoryProducts/Jewelery";
import AllProducts from "./Components/CategoryProducts/AllProducts";
import WemensClothing from "./Components/CategoryProducts/WemensClothing";
import MenClothing from "./Components/CategoryProducts/MenClothing";
import ElectronicsProducts from "./Components/CategoryProducts/ElectronicsProducts";
import { fetchDataAPI } from "./redux/actions/allAction";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAPI()); // جلب البيانات عند تحميل التطبيق
  }, [dispatch]);
  return (
    <div className="container-fluid">
      {/* <Header /> */}
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        {/* <Route path="/header" element={<Header/>}></Route> */}
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/homePage" element={<HomePage />}>
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="menClothing" element={<MenClothing />} />
          <Route path="WemensClothing" element={<WemensClothing />} />
          <Route path="electronicsProducts" element={<ElectronicsProducts />} />
        </Route>
        <Route path="/signUpPage" element={<SignUpPage />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/cartPage" element={<CartPage />}></Route>
        <Route path="/favoritesPage" element={<FavoritesPage />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        {/* <Route path="/details" element={<Details />}></Route> */}
        <Route path="/products/:id" element={<Details />}></Route>
      </Routes>
      {/* <Button onClick={() => Navigate("/home")}>Back to Home</Button> */}
      <Footer />
      <Toaster  />
      {/* <ProductDetails/> */}
    </div>
  );
};

export default App;
