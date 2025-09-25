import { Button } from "@/components/ui/button";
import { useFetchNowPlayingMovies } from "@/hooks/use-fetch-nowplaying-movies";
import { NETFLIX_AVATAR, NETFLIX_LOGO } from "@/utils/constants";
import { signOutUser } from "@/utils/firebase/userActions";
import type { RootState } from "@/utils/store/appStore";
import type { UserState } from "@/utils/store/slices/userSlice";
import { useSelector } from "react-redux";
import { MovieDetails } from "./components/movie-details";
import { VideoContainer } from "./components/video-container";

export default function Browse() {
  const user = useSelector((state: RootState) => state.user as UserState);

  const movies = useSelector((state: RootState) => state.movie?.nowPlayingMovies);

  useFetchNowPlayingMovies();

  return (
    <>
      <main className={`w-full relative flex flex-col`}>
        <header className="w-full absolute top-0 px-20 bg-gradient-to-b from-black flex items-center justify-between">
          <img src={NETFLIX_LOGO} alt="netflix logo" width={150} height={50} />
          <div className="flex gap-2 items-center">
            <img src={user?.photoURL ?? NETFLIX_AVATAR} alt="Avatar" width={50} height={10} />
            <Button
              size={"sm"}
              onClick={() => {
                signOutUser();
              }}
            >
              Signout
            </Button>
          </div>
        </header>
        <section className="min-h-[70vh] h-full w-full max-h-screen flex justify-center items-center">
          <VideoContainer movieId={movies[0]?.id} />
          <div className="absolute bottom-10  px-20 bg-gradient-to-r from-black">
            <MovieDetails movie={movies[0]} />
          </div>
        </section>
      </main>
    </>
  );
}
