import { createSlice } from "@reduxjs/toolkit";

export type SearchState = Record<string, string[]>;

const initialState = null;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSuggestions: (state, action) => {
      // here implement lru last recently used, cache only recent 10 searchResults
      if (state) {
        let newState = { ...(state as unknown as SearchState) };
        Object.entries(newState).length >= 10 && delete newState[Object.keys(newState)[0]];
        newState = { ...newState, ...action.payload };
        return newState as SearchState;
      }
      const newState = { ...(state as unknown as SearchState), ...action.payload };
      return newState;
    },
  },
});

export const { addSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
