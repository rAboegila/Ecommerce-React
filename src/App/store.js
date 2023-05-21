import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cart/cartSlice";
import authReducer from "../Features/auth/authSlice";
import wishlistReducer from "../Features/wishlist/wishlistSlice";
// import { userSlice } from "../Lib/IsAdmin";
import useReducer from "../Lib/IsAdmin";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    user: useReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
