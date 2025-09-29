import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import { API_OPTIONS } from "@/utils/api/consts";
import { NETFLIX_BG } from "@/utils/constants";
import type { RootState } from "@/utils/store/appStore";
import { addMovieDetailById, type Movie } from "@/utils/store/slices/movieSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { MovieContainer } from "./components/movie-container";

export default function MoviePage() {
  const params = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const moviesCache = useSelector((store: RootState) => store.movie.movieDetailsCache);
  const dispatch = useDispatch();

  useEffect(() => {
    if (moviesCache?.[params.id!]) {
      setMovie(moviesCache?.[params.id!]);
      return;
    } else {
      getMovieDetails().then((data) => {
        setMovie(data);
        dispatch(
          addMovieDetailById({
            [params.id!]: data,
          })
        );
      });
    }
  }, []);

  const getMovieDetails = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, API_OPTIONS);
    const data = await res.json();
    return data;
  };
  return (
    <main className={`w-full h-full relative flex flex-col bg-black text-white`}>
      <Header />
      <section
        className={cn(
          "min-h-[90vh] h-full w-full max-h-fit flex mt-20 z-0 relative",
          `bg-[url(${NETFLIX_BG})] bg-cover`
        )}
      >
        <MovieContainer movie={movie} />
      </section>

      <div className="h-20 w-full" />
      <div className="h-20 w-full" />
    </main>
  );
}
