import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../MoviesList";

const SuggestedVideos = () => {
  const { searchedMovie } = useSelector((store) => store.AIsearch);
  if (!searchedMovie) return null;
  console.log(searchedMovie);
  return (
    <div className="text-white mt-5">
      <MoviesList moviesCollection="Searched results" movies={searchedMovie} />
    </div>
  );
};

export default SuggestedVideos;
