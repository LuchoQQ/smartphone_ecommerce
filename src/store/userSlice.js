import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    user: {},
  },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = {}
    },
    handleUser: (state, action) => {
      state.user = action.payload;
      state.isLogged = true
    },
  },
});


export const { login, logout, handleUser } = userSlice.actions

export const selectUser = (state) => state.user

export const selectLoggedUser = (state) => state.isLogged

export default userSlice.reducer