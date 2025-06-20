import React from "react";
import GPTSearchbar from "./GPTSearchbar";
import GPTMovieSuggesions from "./GPTMovieSuggesions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      <img className="absolute top-0 left-0 w-full h-full object-cover z-0" src={BG_URL} alt="bg-chat-img" />
      <div className="relative pt-20 z-10 flex flex-col items-center justify-center w-full h-full">
        <GPTSearchbar />
        <GPTMovieSuggesions />
      </div>
    </div>
  );
};

export default GPTSearch;
