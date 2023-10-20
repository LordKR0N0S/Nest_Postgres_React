import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.email = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
