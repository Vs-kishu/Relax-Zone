import React from "react";
import { tmbd_img_url } from "../constants/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title } = movie;

  return (
    <>
      {poster_path && (
        <div className="w-32">
          <img src={tmbd_img_url + poster_path} alt={original_title} />
        </div>
      )}
    </>
  );
};

export default MovieCard;
