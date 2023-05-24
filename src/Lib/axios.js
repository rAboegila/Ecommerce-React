import axios from "axios";

const baseURL = "https://ecommerce-django-ct3k.onrender.com";

const api = axios.create({
  baseURL: baseURL,
  // timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
/**
 * 
function reverseFormattedColor(formattedString) {
  return formattedString.split(" ").map(word => word.charAt(0).toLowerCase() + word.slice(1)).join("_");
}

function formatColor(formattedString) {
  return formattedString.split(" ").map(word => word.charAt(0).toLowerCase() + word.slice(1)).join("_");
}
 */

/*

f
*/