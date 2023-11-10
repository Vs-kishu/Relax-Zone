import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ moviesCollection, movies }) => {
  return movies ? (
    <div className="mb-5">
      <h1 className="text-xl md:text-3xl text-white pl-3 md:pl-5 mb-3">
        {moviesCollection}
      </h1>
      <div className="flex   w-full overflow-x-scroll no-scrollbar px-3 md:px-5">
        <div className="text-white flex gap-2">
          {movies?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
};

export default MoviesList;
