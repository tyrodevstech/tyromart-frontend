import axios from "axios"
import { DOMAIN_URL } from "../global";

export const fetchCart = async()=>{
    console.log("Fetching Cart")
    const response = await axios.get(`${DOMAIN_URL}api/cart/cart-details/`,{ withCredentials: true })
    const cart = await response.data

    console.log("Cart: ",cart)
    return cart
}