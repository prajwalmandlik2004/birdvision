import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductDetails } from "../services/api";
import "../style/productdetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails(productId).then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-listing-page">
      <header className="header">
        <h1 className="mb-3 header-title">Product Details</h1>
        <Link className="prodButton" to="/">
          Go Back To Product List
        </Link>
      </header>
      <div className="product-details">
        <img src={product.images[0]} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
      </div>
      <footer className="footer">
        <p className="footer-text">&copy; 2024 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetails;
