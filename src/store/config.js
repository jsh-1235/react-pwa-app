import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./slices/counter";

const logger = createLogger();

const initialState = {};

// export const store = configureStore({
//   reducer: {
//     reducer: combineReducers({
//       counter: counterSlice.reducer,
//     }),
//     middleware: [logger],
//     devTools: process.env.NODE_ENV !== "production",
//     preloadedState: initialState,
//   },
// });

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    middleware: [logger],
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState,
  },
});

export const useAppSelector = useSelector;
// export const useAppSelector = store.getState;
// export const useAppDispatch = () => useDispatch();
export const useAppDispatch = () => store.dispatch;

export default store;
