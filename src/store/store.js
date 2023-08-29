import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import moviesReducer from "../store/movieSlice";
import AIsearch from "./AIsearch";
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    AIsearch,
  },
});

export default store;
