import axios from "axios";

// const baseURL = "http://127.0.0.1:8000";
const baseURL = "https://ecommerce-django-app.onrender.com/";

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
