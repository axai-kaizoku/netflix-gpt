import type { MovieState } from "@/utils/store/slices/movieSlice";

export const MovieDetails = ({ movie }: { movie: MovieState["nowPlayingMovies"][0] }) => {
  return (
    <div className="text-white  flex flex-col  gap-2 justify-start">
      <h1 className="text-2xl font-semibold">{movie?.title}</h1>
      <p className="text-sm w-1/4">{movie?.overview}</p>
    </div>
  );
};
