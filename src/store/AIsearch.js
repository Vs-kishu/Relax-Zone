import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isSearched: false,
  movieResults: null,
  movieNames: null,
  isLoading: false,
};
const AIslice = createSlice({
  name: 'AIsearch',
  initialState,
  reducers: {
    setAIsearch: (state) => {
      state.isSearched = true;
    },
    resetAISearch: (state) => {
      state.isSearched = false;
    },
    searchedResults: (state, action) => {
      state.isLoading = true;
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.isLoading = false;
    },
    setLoadingState: (state) => {
      state.isLoading = true;
    },
    removeLoadingState: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setAIsearch,
  searchedResults,
  setLoadingState,
  removeLoadingState,
  resetAISearch,
} = AIslice.actions;

export default AIslice.reducer;
