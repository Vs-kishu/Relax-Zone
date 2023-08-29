import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroVideo: null,
  heroInfo: null,
  popular: [],
  top_rated: [],
  upcoming: [],
  now_playing: [],
};

const movieslice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    storeMovies: (state, action) => {
      state.heroVideo = action.payload;
    },
    setHeroVideoInfo: (state, action) => {
      state.heroInfo = action.payload;
    },
    setMoviesAstype: (state, action) => {
      const { data, movieType } = action.payload;
      state[movieType] = data;
    },
  },
});

export const { storeMovies, setHeroVideoInfo, setMoviesAstype } =
  movieslice.actions;

export default movieslice.reducer;
