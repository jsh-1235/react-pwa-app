import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const fetchAsync = createAsyncThunk("counter/fetchAsync", async (text) => {
  console.log(text);

  const resp = await fetch("https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits");

  const data = await resp.json();

  return data.value;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsync.pending, (state, action) => {
      state.status = "pending";
    });

    builder.addCase(fetchAsync.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.count = action.payload;
    });

    builder.addCase(fetchAsync.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
  // extraReducers: {
  //   [fetchAsync.pending.type]: (state) => {
  //     state.status = "pending";
  //   },
  //   [fetchAsync.fulfilled.type]: (state, action) => {
  //     state.status = "fulfilled";
  //     state.count = action.payload;
  //   },
  //   [fetchAsync.rejected.type]: (state) => {
  //     state.status = "rejected";
  //   },
  // },
});

// export const getCount = (state) => state.counter.count;

export const { setCount } = counterSlice.actions;

export default counterSlice;
