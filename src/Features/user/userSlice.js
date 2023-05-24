import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Lib/axios";

const initialState = {
  profile: {
    id: null,
    username: "",
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

function setProfileReducer(state, action) {
  state.profile.first_name = action.payload.first_name;
  state.profile.last_name = action.payload.last_name;
  state.profile.username = action.payload.username;
  state.profile.email = action.payload.email;
  state.profile.date_of_birth = action.payload.date_of_birth;
  state.profile.phone = action.payload.phone;
  state.profile.profileImgUrl = action.payload.profileImgUrl;
}

const addUserToken = (state, action) => {
  state.token = action.payload;
};

const removeUserReducer = (state) => {
  state.profile.first_name = "";
  state.profile.last_name = "";
  state.profile.email = "";
  state.profile.date_of_birth = "";
  state.profile.phone = "";
  state.profile.profileImgUrl = null;
  state.token = "";
};

export const fetchProfile = createAsyncThunk("user/fetchProfile", () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return api.get("/account/profile/", config).then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: removeUserReducer,
    addToken: addUserToken,
    setProfile: setProfileReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile.first_name = action.payload.first_name;
        state.profile.last_name = action.payload.last_name;
        state.profile.username = action.payload.username;
        state.profile.email = action.payload.email;
        state.profile.date_of_birth = action.payload.date_of_birth;
        state.profile.phone = action.payload.phone;
        state.profile.profileImgUrl = action.payload.profileImgUrl;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { removeUser, addToken, setProfile } = userSlice.actions;
export const getLoading = (state) => state.user.loading;
export const getProfile = (state) => state.profile.profile;
export const getError = (state) => state.user.error;
export const getToken = (state) => state.user.token;
