import React from "react";
import { Link } from "react-router-dom";
import "../style/product.css";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
