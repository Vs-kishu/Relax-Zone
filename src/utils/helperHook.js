import { useEffect, useState } from "react";
import { options } from "./helper";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeroVideoInfo,
  setMoviesAstype,
  storeMovies,
} from "../store/movieSlice";

export const useGetHeroVideo = () => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    const randomMovie =
      json.results[Math.floor(Math.random() * json.results.length)];

    dispatch(setHeroVideoInfo(randomMovie));
    getVideo(randomMovie.id);
  };

  const getVideo = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?`,
      options
    );
    const json = await data.json();
    const filterTrailer = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    dispatch(
      storeMovies(
        filterTrailer[Math.floor(Math.random() * filterTrailer.length)]
      )
    );
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, []);
};

export const useGetMovies = (movieType) => {
  const dispatch = useDispatch();
  const [shouldFetch, setShouldFetch] = useState(true);
  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?language=en-US&page=1`,
      options
    );
    const json = await data.json();
    dispatch(setMoviesAstype({ data: json.results, movieType }));
    setShouldFetch(true);
  };
  useEffect(() => {
    shouldFetch && getMovies();
    // eslint-disable-next-line
  }, []);
};
