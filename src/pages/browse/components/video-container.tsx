import { API_OPTIONS } from "@/utils/api/consts";
import { useEffect } from "react";

export const VideoContainer = ({ movieId }: { movieId?: number }) => {
  const fetchMovieTrailer = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers`, API_OPTIONS);
    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);

  return (
    <div className=" w-full h-screen relative">
      <iframe src=""></iframe>
    </div>
  );
};
