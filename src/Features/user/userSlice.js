import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Lib/axios";

const initialState = {
  profile: {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone: "",
    profileImgUrl: null,
  },
  token: "",
  loading: false,
  error: null,
};

function setProfile(state, user) {
  state.user.profile.first_name = user.first_name;
  state.user.profile.last_name = user.last_name;
  state.user.profile.email = user.email;
  state.user.profile.date_of_birth = user.date_of_birth;
  state.user.profile.phone = user.phone;
  state.user.profile.profileImgUrl = user.profileImgUrl;
}

const addUserToken = (state, action) => {
  state.token = action.payload;
};

const removeUserReducer = (state) => {
  state.user.profile.first_name = null;
  state.user.profile.last_name = null;
  state.user.profile.email = null;
  state.user.profile.date_of_birth = null;
  state.user.profile.phone = null;
  state.user.profile.profileImgUrl = null;
  state.user.token = null;
};

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (state) => {
    const config = {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    };
    const response = await api.get("/account/profile/", config);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: removeUserReducer,
    addToken: addUserToken,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        setProfile(state, action.payload);
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { removeUser, addToken } = userSlice.actions;
export const getLoading = (state) => state.user.loading;
export const getError = (state) => state.user.error;
export const getToken = (state) => state.user.token;
