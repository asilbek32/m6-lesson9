import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slise"
export const store = configureStore({
  reducer: {
    user: userSlice,   
  },
});
