import { createSlice } from "@reduxjs/toolkit";

export type SearchState = Record<string, string[]>;

const initialState = null;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      return action.payload;
    },
  },
});
