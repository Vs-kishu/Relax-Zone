import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from '../MoviesList';
import { ShimmerCards } from '../Shimmer';

const SuggestedVideos = () => {
  const { movieResults, movieNames, isLoading } = useSelector(
    (store) => store.AIsearch
  );
  if (isLoading)
    return (
      <>
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
      </>
    );
  return (
    <div className="text-white mt-5 flex flex-col">
      {movieNames?.map((movieName, index) => (
        <MoviesList
          key={movieName[index]}
          moviesCollection={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default SuggestedVideos;
