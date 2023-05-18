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

/* const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }

  const fetchUserById = createAsyncThunk('users/fetchById', 
  async (userId, thunkApi) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
  })
  return (await response.json()) as MyData
})


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
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchUsers.pending, (state) => {
  //     state.loading = true
  //     })
  //     builder.addCase(fetchUsers. fulfilled, (state, action) => {
  //     state.loading = false
  //     state.users = action.payload
  //     state.error =''
  //   })
  //     T
  //     builder.addCase(fetchUsers.rejected, (state, action) => {
  //     state. loading = false
  //     state.users = []
  //     state.error = action. error.message
  //     })
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
