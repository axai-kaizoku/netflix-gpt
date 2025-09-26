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
      <iframe
        width="560"
        height="315"
        className="w-full h-full"
        src="https://www.youtube.com/embed/x7uLutVRBfI?si=Jc_bJPukTHmPxwUN&amp;controls=0&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </div>
  );
};
