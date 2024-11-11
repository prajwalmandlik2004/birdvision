import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import "../style/productlisting.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(10, (page - 1) * 10).then((data) =>
      setProducts(data.products)
    );
  }, [page]);

  return (
    
    // <div className="product-listing">
    //   {products.map(product => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    //   <div className="pagination">
    //     <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
    //     <button onClick={() => setPage(page + 1)}>Next</button>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListing;
