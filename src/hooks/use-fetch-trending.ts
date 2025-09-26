import { addTrendingMovies } from "@/utils/store/slices/movieSlice";
import { useAddMoviesToStore } from "./use-add-movies-to-store";

export const useFetchTrendingMovies = () => {
  useAddMoviesToStore("https://api.themoviedb.org/3/trending/movie/day?language=en-US", addTrendingMovies);
};
