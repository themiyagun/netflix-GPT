import React from "react";
import { BG_URL } from "../utils/constants";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchbar = () => {
  const language = useSelector((store)=>store.config.language);
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={BG_URL}/>
      <form className="absolute w-1/2 bg-black bg-opacity-80 p-6">
        <div className="flex gap-2">
          <input
            type="text"
            className="p-2 w-10/12 border-2 border-red-400"
            placeholder={lang[language].search_placeholder}
          ></input>
          <button className="px-3 py-2 bg-red-800 w-2/12 text-white">{lang[language].search}</button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchbar;
