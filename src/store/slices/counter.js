import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// export const getCount = (state) => state.counter.count;

export const { setCount } = counterSlice.actions;

export default counterSlice;
