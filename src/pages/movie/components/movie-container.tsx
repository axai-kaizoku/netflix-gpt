import { BASE_IMG_URL } from "@/utils/constants";
import type { Movie } from "@/utils/store/slices/movieSlice";
import { commentsData, CommentsList } from "./comment-list";
import { LiveChat } from "./live-chat";

export const MovieContainer = ({ movie }: { movie: Movie | null }) => {
  if (!movie) {
    return (
      <div>
        <h1 className="text-2xl font-bold my-4">Movie not found!</h1>
      </div>
    );
  }
  return (
    <div className="px-10 w-full">
      <div className="flex justify-start gap-2 items-start w-full">
        <img
          src={BASE_IMG_URL + movie.backdrop_path}
          alt={movie.title}
          width={950}
          height={500}
          className="rounded w-2/3 object-contain h-[32rem]"
        />
        <LiveChat />
      </div>

      <h1 className="text-4xl font-bold my-2">{movie?.title}</h1>
      <p className="text-lg max-w-3xl">{movie.overview}</p>
      <div>
        <h1 className="text-2xl font-bold my-4">Comments:</h1>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};
