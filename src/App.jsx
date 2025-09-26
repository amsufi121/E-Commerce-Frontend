import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Product/Products";
import ProductDetail from "./Pages/ProductDetails/ProductDetail";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
