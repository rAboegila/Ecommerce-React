import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Lib/axios";
const initialState = {
  cartItems: [],
  isOpen: false,
  loading: false,
  error: "",
  price: 0,
};

const getIndex = (array, toFind) => {
  array.findIndex((item) => item.id === toFind.id);
};
const popItem = (array, index) => {
  array.splice(index, 1);
};

const addItemReducer = (state, action) => {
  console.log("state >>> ", action.payload);
  const productID = action.payload.id;
  const itemData = {
    color: action.payload.color,
    size: action.payload.size,
    quantity: action.payload.quantity,
  };
  api
    .post(`/cart/item/create/${productID}/`, itemData)
    .then((res) => {
      state.cartItems.push(action.payload);
      state.price += action.payload.price;
      console.log("add to cart succesfull!\nres >>> ", res);
    })
    .catch((err) => {
      console.log("add to cart failed!\n err >>> ", err);
    });
};

const removeItemReducer = (state, action) => {
  const index = getIndex(state.cartItems, action.payload);
  popItem(state.cartItems, index);
};
const incrementItemReducer = (state, action) => {
  // const index = getIndex(state.cartItems, action.payload);
  state.cartItems[action.payload].quantity++;
};
const decrementItemReducer = (state, action) => {
  // const index = getIndex(state.cartItems, action.payload);
  state.cartItems[action.payload].quantity--;
};
const openCartDrawer = (state) => {
  state.isOpen = true;
};
const closeCartDrawer = (state) => {
  state.isOpen = false;
};

// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async () => {
//     const response = await api.get("/cart/list/");
//     return response.data;
//   }
// );
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get("/cart/list/", config);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: addItemReducer,
    removeItem: removeItemReducer,
    incrementItem: incrementItemReducer,
    decrementItem: decrementItemReducer,
    openCart: openCartDrawer,
    closeCart: closeCartDrawer,
  },
  extrareducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.cartItems;
        state.price = action.payload.price;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  openCart,
  closeCart,
} = cartSlice.actions;
export const getCartItems = (state) => state.cart.cartItems;
export const isOpen = (state) => state.cart.isOpen;
export const getNumItems = (state) => state.cart.cartItems.length;
export const getLoading = (state) => state.cart.loading;
export const getError = (state) => state.cart.error;
