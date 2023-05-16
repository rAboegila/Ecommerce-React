import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  //   initialState: {
  //     isLoggedIn: false,
  //     token: null,
  //     refresh_token: null,
  //     isLoading: false,
  //     error: null,
  //   },

  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      // localStorage.removeItem('token');
      // localStorage.removeItem('refresh_token');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
