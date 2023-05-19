import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Lib/axios";
const initialState = {
  cartItems: [
    {
      title: "Ant Design Title 1",
      quantity: 2,
      inventory: 2,
    },
    {
      title: "Ant Design Title 2",
      quantity: 3,
      inventory: 3,
    },
    {
      title: "Ant Design Title 3",
      quantity: 1,
      inventory: 4,
    },
    {
      title: "Ant Design Title 4",
      quantity: 1,
      inventory: 4,
    },
  ],
  isOpen: false,
  loading: false,
  error: "",
};

const getIndex = (array, toFind) => {
  array.findIndex((item) => item.id === toFind.id);
};
const popItem = (array, index) => {
  array.splice(index, 1);
};

const addItemReducer = (state, action) => {
  console.log("state >>> ", action.payload);
  state.cartItems.push(action.payload);
  //put route f el back
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

const userToken = (state, action) => {
  state.userToken = action.payload;
};

export const fetchCartItems = createAsyncThunk(
  "cart/fetchItems",
  async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get("cart/list/", config);
    return response.data;
  }
);

/*
export const fetchCartItems = createAsyncThunk('cart/fetchItems', () => {
return axios
.get ("https://jsonplaceholder.typicode.com/users')
.then( (response) =› response.data)
})
const userslice = createslice({
name: 'user', initialState,
extrareducers: (builder) =› {
builder.addCase(fetchUsers-pending, (state) => {
state.loading = true
})
builder. addCase(fetchUsers. fulfilled, (state, action) => {
state. loading = false
state.users = action.payload
state.error = ''
})
builder.addCase(fetchUsers.rejected, (state, action) => {
state. loading = false
state.users = []
state.error = action.error message
})
}
) */
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
        state.items = action.payload;
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
