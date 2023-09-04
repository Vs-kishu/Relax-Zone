import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSearched: false,
  movieResults: null,
  movieNames: null,
};
const AIslice = createSlice({
  name: "AIsearch",
  initialState,
  reducers: {
    setAIsearch: (state) => {
      state.isSearched = !state.isSearched;
    },
    searchedResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { setAIsearch, searchedResults } = AIslice.actions;

export default AIslice.reducer;
