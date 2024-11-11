import axios from 'axios';

const API_BASE = 'https://dummyjson.com';

export const fetchProducts = async (limit = 10, skip = 0) => {
    try {
      const response = await axios.get(`${API_BASE}/products?limit=${limit}&skip=${skip}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return { products: [] };
    }
  };
  

export const fetchProductDetails = async (productId) => {
  const response = await axios.get(`${API_BASE}/products/${productId}`);
  return response.data;
};

