import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./shoesReducer";

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
  },
});
