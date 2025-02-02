import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import LatestProducts from "../Components/LatestProducts";
import Jewelery from "../Components/CategoryProducts/Jewelery";

export default function HomePage() {
  const targetDate = "2024-12-20T23:59:59";
  return (
    <div>
      <Main />
      {/* <Header/> */}
      <LatestProducts />
     
    </div>
  );
}
