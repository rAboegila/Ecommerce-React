import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cart/cartSlice";
import authReducer from "../Features/auth/authSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, auth: authReducer },
});

export default store;
