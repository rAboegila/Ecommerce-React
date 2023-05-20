import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Lib/axios";

const initialState = {
  cartItems: [],
  isOpen: false,
  loading: false,
  error: "didnt update!",
  price: 0,
};

const getIndex = (array, itemToFind) => {
  return array.findIndex((item) => item.id === itemToFind.id);
};
const popItem = (array, index) => {
  array.splice(index, 1);
};

const addItemReducer = (state, action) => {
  console.log("product in dispatch >>> ", action.payload);
  state.cartItems.push(action.payload);
  state.price += Number(action.payload.price);
};

const removeItemReducer = (state, action) => {
  const index = getIndex(state.cartItems, action.payload);
  popItem(state.cartItems, index);
  state.price -= Number(action.payload.price) * Number(action.payload.quantity);
};
const incrementItemReducer = (state, action) => {
  const index = getIndex(state.cartItems, action.payload);
  console.log(index);

  state.cartItems[index].quantity++;
  state.price += Number(state.cartItems[index].price);
};
const decrementItemReducer = (state, action) => {
  console.log(action.payload);
  const index = getIndex(state.cartItems, action.payload);
  console.log(index);
  state.cartItems[index].quantity--;
  state.price -= Number(state.cartItems[index].price);
};
const openCartDrawer = (state) => {
  state.isOpen = true;
};
const closeCartDrawer = (state) => {
  state.isOpen = false;
};

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (product) => {
    const itemData = {
      color: product.color,
      size: product.size,
      quantity: product.quantity,
    };
    const response = await api.post(
      `/cart/item/create/${product.id}/`,
      itemData
    );

    return {
      product: product,
      data: response.data,
    };
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  (thunkAPI) => {
    return api.get("/cart/list/").then((res) => res.data);
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
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.cartItems;

      state.price = action.payload.total;
      state.error = "";
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
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
export const getPrice = (state) => state.cart.price;

// .addCase(addProduct.pending, (state) => {
//   state.loading = true;
//   state.error = null;
// })
// .addCase(addProduct.fulfilled, (state, action) => {
//   console.log("addToCart fulfilled:", action.payload);

//   state.loading = false;
//   state.items = [...state.cartItems, action.payload.data];
//   state.price = state.price + action.payload.data.price;
//   const product = action.payload.product;
//   console.log(`Added ${product.name} to cart!`);
// })
// .addCase(addProduct.rejected, (state, action) => {
//   console.log("addToCart rejected:", action.error);

//   state.loading = false;
//   state.error = action.error.message;
// });
