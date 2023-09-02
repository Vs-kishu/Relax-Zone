import React, { useRef } from "react";
import { openai, options } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { setSearchMovie } from "../../store/AIsearch";

const SearchBar = () => {
  const input = useRef();
  const dispatch = useDispatch();

  // const handleAIsearch = async (e) => {
  //   e.preventDefault();
  //   const completion = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: "Say this is a test" }],
  //     model: "gpt-3.5-turbo",
  //   });

  //   console.log(completion.choices);
  // };

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${input.current.value}&include_adult=false&page=1`,
      options
    );
    const json = await data.json();
    dispatch(setSearchMovie(json.results));
  };

  return (
    <form
      onSubmit={handleSearch}
      className=" mx-auto w-11/12 md:w-2/3 flex justify-center"
    >
      <input
        type="text"
        ref={input}
        className="py-2 px-6 border-2 rounded-l-lg w-full shadow-md shadow-red-700 border-red-700"
      />
      <button className=" text-white font-semibold px-4 rounded-r-lg bg-red-700 hover:bg-red-500 text-center shadow-md shadow-red-700 ">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
