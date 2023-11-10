import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setHeroVideoInfo,
  setMoviesAstype,
  storeMovies,
} from '../store/movieSlice';
import { options } from './helper';

export const useGetHeroVideo = () => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
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
      (movie) => movie.type === 'Trailer'
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
  const [isLoading, setIsLoading] = useState(false);
  const getMovies = async () => {
    setIsLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?language=en-US&page=1`,
      options
    );
    const json = await data.json();
    dispatch(setMoviesAstype({ data: json.results, movieType }));
    setShouldFetch(true);
    setIsLoading(false);
  };
  useEffect(() => {
    shouldFetch && getMovies();
    // eslint-disable-next-line
  }, []);

  return { isLoading };
};
