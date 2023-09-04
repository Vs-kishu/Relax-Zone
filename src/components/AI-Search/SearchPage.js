import React from "react";
import { BG_IMAGE } from "../../constants/constants";
import SearchBar from "./SearchBar";
import SuggestedVideos from "./SuggestedVideos";
import Footer from "../Footer";

const SearchPage = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed bg-black blur-lg">
        <img
          className="h-screen object-contain"
          src={BG_IMAGE}
          alt="background"
        />
      </div>
      <div className="absolute top-[20%] h-full w-full ">
        <SearchBar />
        <SuggestedVideos />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
