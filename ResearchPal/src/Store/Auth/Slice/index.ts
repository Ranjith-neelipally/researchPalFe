import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../cofigureStore";

interface AuthInterface {
  accessToken: string;
  isAccessToken: boolean;
}

const initialState: AuthInterface = {
  accessToken: "",
  isAccessToken: false,
};

const AuthSlice = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    updateAccessToken: (
      AuthState,
      { payload }: PayloadAction<AuthInterface>
    ) => {
      AuthState.accessToken = payload.accessToken;
      AuthState.isAccessToken = payload.isAccessToken
    },
  },
});

export const { updateAccessToken } = AuthSlice.actions;

export const getAuthState = createSelector(
  (state: RootState) => state,
  (AuthState) => AuthState
);

export default AuthSlice.reducer;
