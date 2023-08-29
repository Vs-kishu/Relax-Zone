import React from "react";
import { BG_IMAGE } from "../../constants/constants";
import SearchBar from "./SearchBar";
import SuggestedVideos from "./SuggestedVideos";

const SearchPage = () => {
  return (
    <div className="flex justify-center">
      <div className=" relative blur-lg">
        <img
          className="h-screen object-contain"
          src={BG_IMAGE}
          alt="background"
        />
      </div>
      <div className="absolute top-[20%] w-full ">
        <SearchBar />
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default SearchPage;
