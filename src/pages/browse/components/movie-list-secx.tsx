import { BASE_IMG_URL } from "@/utils/constants";
import type { Movie } from "@/utils/store/slices/movieSlice";
import { Link } from "react-router";

export const MovieListSecx = ({ data, title }: { data?: Movie[]; title: string }) => {
  return (
    <section className="px-20 w-full h-full my-2">
      <h1 className="text-2xl font-medium mb-3">{title} </h1>
      <div className="flex gap-5 w-full overflow-x-auto hide-scrollbar">
        {data?.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="rounded m-1 w-52 h-32 shrink-0 relative">
              <img
                src={BASE_IMG_URL + movie?.backdrop_path}
                alt={movie?.title}
                className="w-full h-full   rounded-xl"
                width={200}
                height={100}
              />
              <h1 className=" font-semibold absolute bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent w-full">
                {movie?.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
