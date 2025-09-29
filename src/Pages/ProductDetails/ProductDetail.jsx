import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  // Dummy Product Data

  const [product, setProductDetails] = useState(null);
  const { id } = useParams();

  function fetchProducts() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
      })
      .catch((error) => console.error("Error", error));
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="product-detail-container">
      {/* Left: Images */}
      <div className="product-images">
        <img src={product?.image} alt={product?.title} />
      </div>

      {/* Right: Info */}
      <div className="product-info">
        <h1 className="product-title">{product?.title}</h1>

        <div className="product-rating">
          ⭐ {product?.rating?.rate} ({product?.rating?.count} reviews)
        </div>

        <div className="product-price">
          <span>${product?.price}</span>
          <span className="discount">{product?.discount}</span>
        </div>

        <p className="product-description">{product?.description}</p>

        <div className="product-actions">
          <button className="buy-btn">Buy Now</button>
          <button className="cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
