import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSearched: false,
  searchedMovie: null,
};
const AIslice = createSlice({
  name: "AIsearch",
  initialState,
  reducers: {
    setAIsearch: (state) => {
      state.isSearched = !state.isSearched;
    },
    setSearchMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
  },
});

export const { setAIsearch, setSearchMovie } = AIslice.actions;

export default AIslice.reducer;
