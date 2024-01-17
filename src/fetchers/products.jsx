import axios from "axios";
import { DOMAIN_URL } from "../global";

// axios.defaults.withCredentials = true;

export const fetchProducts = async () => {
  const response = await axios.get(`${DOMAIN_URL}products/`);
  const products = await response.data;
  console.log("Products: ", products);
  return products;
};

export const fetchProductDetails = async (productId) => {
  const response = await axios.get(
    `${DOMAIN_URL}products/${productId}`
  );
  const product = await response.data;
  console.log("Product: ", product);
  return product;
};
