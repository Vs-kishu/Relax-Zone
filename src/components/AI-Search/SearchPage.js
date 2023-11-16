import React from 'react';
import SearchBar from './SearchBar';
import SuggestedVideos from './SuggestedVideos';

const SearchPage = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed bg-black  ">
        <img
          className="h-screen object-contain w-full blur-xl"
          src="/relax-cover.jpg"
          alt="background"
        />
      </div>
      <div className="absolute top-[20%] h-full w-full ">
        <SearchBar />
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default SearchPage;
