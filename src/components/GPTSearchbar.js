import React, { useRef } from "react";
import { API_OPTIONS, BG_URL } from "../utils/constants";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openAI from "../utils/openAI";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchbar = () => {
  const language = useSelector((store) => store.config.language);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGPTSerchClick = async () => {
    // const query =
    //   "Act as a movie recomendation system suggest some movies for the query :" +
    //   searchText.current.value +
    //   "only give names of 5 movies and need that comma seperated like the example result , ex: movie1,movie2,movie3...";

    // const gptResult = openAI.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   store: true,
    //   messages: [{ role: "user", content: query }],
    // });

    // console.log(gptResult.choices?.[0]?.messages?.content.split(","));

    // const gptMovies = gptResult.choices?.[0]?.messages?.content.split(",")

    const gptMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi do Yaaro",
      "Padosan",
    ];

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black bg-opacity-80 p-6"
      >
        <div className="flex gap-2">
          <input
            ref={searchText}
            type="text"
            className="p-2 w-10/12 border-2 border-red-400"
            placeholder={lang[language].search_placeholder}
          ></input>
          <button
            onClick={handleGPTSerchClick}
            className="px-3 py-2 bg-red-800 w-2/12 text-white"
          >
            {lang[language].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchbar;
