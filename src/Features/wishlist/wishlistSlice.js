import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Lib/axios";

const initialState = {
  items: [],
  loading: false,
  error: "didnt update!",
};

const getIndex = (array, itemToFind) => {
  return array.findIndex((item) => item.id === itemToFind.id);
};
const popItem = (array, index) => {
  array.splice(index, 1);
};

const addItemReducer = (state, action) => {
  console.log("product in dispatch >>> ", action.payload);
  state.items.push(action.payload);
};

const removeItemReducer = (state, action) => {
  const index = getIndex(state.items, action.payload);
  popItem(state.items, index);
};

export const fetchItems = createAsyncThunk(
  "wishlist/fetchItems",
  (thunkAPI) => {
    return api.get("/wishlist/list/").then((res) => res.data);
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishItem: addItemReducer,
    removeItem: removeItemReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload.products;
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default wishlistSlice.reducer;
export const { addWishItem, removeItem } = wishlistSlice.actions;
export const getWishItems = (state) => state.wishlist.items;
export const getWishNumItems = (state) => state.wishlist.items.length;
export const getLoading = (state) => state.wishlist.loading;
export const getError = (state) => state.wishlist.error;
