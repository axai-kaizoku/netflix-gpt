import { addPopularMovies } from "@/utils/store/slices/movieSlice";
import { useAddMoviesToStore } from "./use-add-movies-to-store";

export const useFetchPopularMovies = () => {
  useAddMoviesToStore("https://api.themoviedb.org/3/movie/popular", addPopularMovies);
};
