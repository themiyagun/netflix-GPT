import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggesions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movieNames, gptMovies } = gpt;

  return (
    <div className="w-10/12">
      <div className="bg-black bg-opacity-70">
        {movieNames?.map((movieName, index) => (
          <MovieList title={movieName} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggesions;
