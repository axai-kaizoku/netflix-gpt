import { createSlice } from "@reduxjs/toolkit";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieState = {
  nowPlayingMovies: Movie[];
  trendingMovies?: Movie[];
  popularMovies?: Movie[];
  isSearching?: boolean;
};

const initialState: MovieState = { nowPlayingMovies: [], isSearching: false };

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      const newState = {
        ...(state as unknown as MovieState),
        nowPlayingMovies: action.payload,
      };
      return newState;
    },
    addTrendingMovies: (state, action) => {
      const newState = {
        ...(state as unknown as MovieState),
        trendingMovies: action.payload,
      };
      return newState;
    },
    addPopularMovies: (state, action) => {
      const newState = {
        ...(state as unknown as MovieState),
        popularMovies: action.payload,
      };
      return newState;
    },
    toggleIsSearching: (state) => {
      state.isSearching = !state.isSearching;
    },
  },
});

export const { addNowPlayingMovies, toggleIsSearching, addTrendingMovies, addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;
