import { useEffect, useState } from "react";
import "./Products.css"; // css import
import { useNavigate } from "react-router-dom";
import ProductDetail from "../ProductDetails/ProductDetail";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [srch, setSrch] = useState("");
  const [dValue, setDvalue] = useState("");

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setFilterData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error", error));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const navigate = useNavigate();

  function filterProducts(e) {
    setSrch(e);

    const fData = productData.filter((prod) => {
      return prod.title.toUpperCase().includes(srch.toUpperCase());
    });

    setFilterData(fData);
  }

  useEffect(() => {
    const fData = productData.filter((prod) => {
      return prod.category == dValue;
    });

    setFilterData(fData);
  }, [dValue]);

  return (
    <>
      <input onChange={(e) => filterProducts(e.target.value)} />
      <select onChange={(e) => setDvalue(e.target.value)}>
        <option value="electronics">Electronics </option>
        <option value="jewelery">Jewelery </option>
        <option value="men's clothing">Men's clothing </option>
      </select>
      <div className="products-container">
        {filterData.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img">
              <img
                src={product.image}
                onClick={() => navigate(`/ProductDetail/${product.id}`)}
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
    </>
  );
};

export default Products;
