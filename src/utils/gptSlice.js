import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
