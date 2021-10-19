import axios from "axios";
import ICreditCardData from "./types/CreditCard.type";

export default axios.create({
    baseURL: "http://localhost:8080/creditcard",
    headers: {
        "Content-type": "application/json",
        credidentials:"Include"
    }
});