import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../MoviesList";

const SuggestedVideos = () => {
  const { movieResults, movieNames } = useSelector((store) => store.AIsearch);
  if (!movieResults) return null;
  return (
    <div className="text-white mt-5 flex flex-col">
      {movieNames.map((movieName, index) => (
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
