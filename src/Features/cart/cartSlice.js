import { createSlice } from "@reduxjs/toolkit";

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
