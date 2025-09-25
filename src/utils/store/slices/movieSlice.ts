import { createSlice } from "@reduxjs/toolkit";

export type MovieState = {
  nowPlayingMovies: {
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
  }[];
};

const initialState: MovieState = { nowPlayingMovies: [] };

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
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;
