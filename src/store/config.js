import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import counterSlice from "./slices/counter";

const logger = createLogger();

const initialState = {};

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    middleware: [logger],
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

export default store;
