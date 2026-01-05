import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const { name, price, rating, description, image, badge } = product;

  const handleAddToCart = () => {
    addToCart();
    alert(`تم إضافة ${name} للسلة`);
  };

  return (
    <div className="product-card">
      {badge && <span className="badge">{badge}</span>}

      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">EGP {price}</p>
      <p className="rating">{"⭐".repeat(rating)}</p>
      <p className="description">{description}</p>

      <button className="add-btn" onClick={handleAddToCart}>
        أضف إلى السلة
      </button>
    </div>
  );
};

export default ProductCard;
