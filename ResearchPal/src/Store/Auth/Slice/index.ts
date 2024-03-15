import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  isAccessToken: false,
};

createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.isAccessToken = action.payload;
    },
  },
});
