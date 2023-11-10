import React from 'react';
import { useSelector } from 'react-redux';
import { useGetMovies } from '../utils/helperHook';
import SearchPage from './AI-Search/SearchPage';
import Header from './Header';
import HeroVideo from './HeroVideo';
import MoviesList from './MoviesList';
import { Shimmer } from './Shimmer';

const Browse = () => {
  const { popular, top_rated, upcoming, now_playing } = useSelector(
    (store) => store.movies
  );
  const { isSearched } = useSelector((store) => store.AIsearch);
  const { isLoading } = useGetMovies('popular');
  useGetMovies('top_rated');
  useGetMovies('upcoming');
  useGetMovies('now_playing');
  if (isLoading) return <Shimmer />;

  return (
    <section className="bg-black py-6">
      <Header />
      {isSearched ? (
        <SearchPage />
      ) : (
        <>
          <HeroVideo />
          <MoviesList moviesCollection={'Up Coming Movies'} movies={upcoming} />
          <MoviesList
            moviesCollection={'Now Playing Movies'}
            movies={now_playing}
          />
          <MoviesList moviesCollection={'Popular Movies'} movies={popular} />
          <MoviesList
            moviesCollection={'Top Rated Movies'}
            movies={top_rated}
          />
        </>
      )}
    </section>
  );
};

export default Browse;
