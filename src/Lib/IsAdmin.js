import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  is_admin: localStorage.getItem("token_admin") ? true : false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAdmin: (state, action) => {
      state.is_admin = action.payload;
    },
  },
});


export const { setIsAdmin } = userSlice.actions;

export const selectIsAdmin = (state) => state.user.is_admin;

export default userSlice.reducer;