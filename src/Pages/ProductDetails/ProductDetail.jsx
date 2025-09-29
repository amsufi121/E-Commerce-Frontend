import "./ProductDetail.css";

const ProductDetail = () => {
  // Dummy Product Data
  const product = {
    id: 1,
    title: "Apple iPhone 14 Pro Max (128GB) - Space Black",
    price: 1299,
    discount: "10% OFF",
    category: "Smartphones",
    description:
      "The iPhone 14 Pro Max features a 6.7-inch display, A16 Bionic chip, Pro camera system, and long battery life. Experience cutting-edge technology in your hands.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-spaceblack-select?wid=940&hei=1112&fmt=png-alpha&.v=1676576728360",
    rating: { rate: 4.8, count: 2450 },
  };

  return (
    <div className="product-detail-container">
      {/* Left: Images */}
      <div className="product-images">
        <img src={product.image} alt={product.title} />
      </div>

      {/* Right: Info */}
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>

        <div className="product-rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </div>

        <div className="product-price">
          <span>${product.price}</span>
          <span className="discount">{product.discount}</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-actions">
          <button className="buy-btn">Buy Now</button>
          <button className="cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
