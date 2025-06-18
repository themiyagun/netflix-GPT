import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upCommingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    addPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    addTopRatedMovies: (state, actions) => {
      state.topRatedMovies = actions.payload;
    },
    addTrailerVideo: (state, actions) => {
      state.trailerVideo = actions.payload;
    },
    addUpCommingMovies: (state, actions) => {
      state.upCommingMovies = actions.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo ,addPopularMovies,addTopRatedMovies,addUpCommingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
