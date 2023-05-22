import { createSlice } from '@reduxjs/toolkit';


// const initialStateAdmin = {
//   is_admin: localStorage.getItem("token") ? true : false,
// };

// export const userSlice = createSlice({
//   name: 'user',
//   // initialState: {
//   //   is_admin: false,
//   // },
//   initialStateAdmin,
//   reducers: {
//     setIsAdmin: (state, action) => {
//         console.log(action.payload);
//       state.is_admin = action.payload;
//       console.log(state);
//       console.log(state.is_admin);

//     },
//   },
// });

const initialState = {
  is_admin: localStorage.getItem("token_admin") ? true : false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAdmin: (state, action) => {
      state.is_admin = true;
    },
    adminlogout: (state, action) => {
      state.is_admin = false;
    }
  },
});


export const { setIsAdmin, adminlogout } = userSlice.actions;

export const selectIsAdmin = (state) => state.user.is_admin;

export default userSlice.reducer;