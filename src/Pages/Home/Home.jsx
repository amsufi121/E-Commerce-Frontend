import React from "react";
import Products from "../Product/Products";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <button className="btn" onClick={() => navigate("/Products")}>
        See Products
      </button>
    </div>
  );
};

export default Home;
