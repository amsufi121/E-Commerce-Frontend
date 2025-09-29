import { useEffect, useState } from "react";
import "./Products.css"; // css import
import { useNavigate } from "react-router-dom";
import ProductDetail from "../ProductDetails/ProductDetail";

const Products = () => {
  const [productData, setProductData] = useState([]);

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error", error));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="products-container">
      {productData.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-img">
            <img
              src={product.image}
              onClick={() => navigate("/ProductDetail")}
            />
          </div>

          <h4 className="product-title">{product.title}</h4>

          <p className="product-description">{product.description}</p>

          <div className="product-details">
            <span className="product-price">${product.price}</span>

            <span className="product-rating">
              {" "}
              ⭐ {product.rating.rate} ({product.rating.count})
            </span>
            <span className="product-category">{product.category}</span>
          </div>

          <div></div>

          <button className="cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
