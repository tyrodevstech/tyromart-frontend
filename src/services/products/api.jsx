import axios from "axios";
import { DOMAIN_URL } from "../../constants";
// axios.defaults.withCredentials = true;

export const fetchProducts = async ({ queryKey }) => {
  // console.log("Fetching Product");
  const page = queryKey.find((item) => typeof item === "object")?.page || 0;

  try {
    const response = await axios.get(
      `${DOMAIN_URL}products?limit=8&skip=${page}`
    );
    const products = await response.data;
    return products;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  // console.log("Fetching Product");
  try {
    const response = await axios.get(`${DOMAIN_URL}products/${productId}`);
    const product = response.data;
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
