import { addNowPlayingMovies } from "@/utils/store/slices/movieSlice";
import { useAddMoviesToStore } from "./use-add-movies-to-store";

export const useFetchNowPlayingMovies = () => {
  useAddMoviesToStore("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", addNowPlayingMovies);
};
