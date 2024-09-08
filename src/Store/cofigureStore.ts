import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Auth/Slice/index";

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>

export default store;
