import axios from "axios";
import { DOMAIN_URL } from "../../constants";
// axios.defaults.withCredentials = true;

export const fetchProducts = async () => {
  console.log("Fetching Product");
  try {
    const response = await axios.get(`${DOMAIN_URL}products/`);
    const products = await response.data;
    // console.log("Products: ", products);
    return products;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};


export const fetchProductById = async (productId) => {
  console.log("Fetching Product");
  try {
    const response = await axios.get(`${DOMAIN_URL}products/${productId}`);
    const product = response.data;
    // console.log("Product: ", product);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
