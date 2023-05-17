import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    is_admin: false,
  },
  reducers: {
    setIsAdmin: (state, action) => {
        console.log(action.payload);
      state.is_admin = action.payload;
      console.log(state);
      console.log(state.is_admin);

    },
  },
});

export const { setIsAdmin } = userSlice.actions;

export const selectIsAdmin = (state) => state.user.is_admin;

export default userSlice.reducer;