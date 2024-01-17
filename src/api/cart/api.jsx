import axios from "axios";

export const fetchCart = async () => {
  console.log("Fetching Cart");
  try {
    const response = await axios.get(`${DOMAIN_URL}api/cart/cart-details/`, {
      withCredentials: true,
    });
    const cart = response.data;

    console.log("Cart: ", cart);
    return cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
