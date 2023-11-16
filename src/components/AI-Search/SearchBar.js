import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeLoadingState,
  searchedResults,
  setLoadingState,
} from '../../store/AIsearch';
import { openai, options } from '../../utils/helper';

const SearchBar = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const handleAIsearch = async () => {
    dispatch(setLoadingState());
    const gptQuery =
      'Act as a Movie Recommendation system and suggest some movies for the query : ' +
      input.current.value +
      '. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResults.choices) {
      <div>no movies found</div>;
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

    const promiseArray = gptMovies.map((movie) => handleSearch(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      searchedResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    dispatch(removeLoadingState());
  };

  const handleSearch = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      options
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" mx-auto w-11/12 md:w-2/3 flex justify-center"
    >
      <input
        type="text"
        ref={input}
        className="py-2 px-6 border-2 rounded-l-lg w-full shadow-md shadow-red-700 border-red-700"
        placeholder="Ask any types of movies with better prompt..... e.g. Mountain Movies, Haunted movies  "
      />
      <button
        onClick={handleAIsearch}
        className=" text-white font-semibold px-4 rounded-r-lg bg-red-700 hover:bg-red-500 text-center shadow-md shadow-red-700 "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
