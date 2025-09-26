import { Button } from "@/components/ui/button";
import { useFetchNowPlayingMovies } from "@/hooks/use-fetch-nowplaying-movies";
import { useFetchPopularMovies } from "@/hooks/use-fetch-popular";
import { useFetchTrendingMovies } from "@/hooks/use-fetch-trending";
import { cn } from "@/lib/utils";
import { NETFLIX_AVATAR, NETFLIX_BG, NETFLIX_LOGO } from "@/utils/constants";
import { signOutUser } from "@/utils/firebase/userActions";
import type { RootState } from "@/utils/store/appStore";
import { toggleIsSearching } from "@/utils/store/slices/movieSlice";
import type { UserState } from "@/utils/store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "./components/movie-details";
import { MovieListSecx } from "./components/movie-list-secx";
import { SearchSection } from "./components/search-secx";
import { VideoContainer } from "./components/video-container";

export default function Browse() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user as UserState);

  const movies = useSelector((state: RootState) => state.movie?.nowPlayingMovies);
  const trendingMovies = useSelector((state: RootState) => state.movie?.trendingMovies);
  const popularMovies = useSelector((state: RootState) => state.movie?.popularMovies);
  const isSearching = useSelector((state: RootState) => state.movie?.isSearching);

  /**
   * Here in this debounce thing, I'll explain the process tell me if it's correct or wrong.
   *
   *
   * 1. console of searchterm initially after 1 sec
   * 2. when user types, it triggers a render because of setSearchTerm
   *    - because it's a state setter, it's an asynchronous process. It batches a re-render of that state change to show updated ui.
   * 3. when re-render is triggered, it sees useEffect and useEffect is triggered because it has searchTerm as a dependency.
   * 4. Then it comes to see setTimeout it will setup a timeout in the browser (and it will run after 1 sec). but it encounters clearTimeout it clear the timer.
   * (here I have a doubt, it will clear the timer, but how after 1 sec console.log is executes?)
   * 5. and it encounters jsx and updates the ui.
   * 6. from steps 2 to 5 repeats on every key press.
   * 7. but in that time interval of 1 sec of every timer the return function of useEffect will be called and clears the timer, and only the last calllback function which is after 1 sec executes, hence this is debounce right?
   *
   *
   */

  /**
   * Corrected version:
   *
   *
   * setSearchTerm causes re-renders.
   *
   * On every render, useEffect runs, cancels the previous timeout, and sets up a new one.
   *
   * If typing continues, the timeout keeps getting canceled.
   *
   * Only when the user stops typing for 1 second does the last timer finish → logs the search term.
   *
   */

  useFetchNowPlayingMovies();

  useFetchPopularMovies();

  useFetchTrendingMovies();

  return (
    <>
      <main className={`w-full h-full relative flex flex-col bg-black text-white`}>
        <header className="w-full absolute top-0 px-20 bg-gradient-to-b from-black flex items-center justify-between z-10">
          <img src={NETFLIX_LOGO} alt="netflix logo" width={150} height={50} />
          <div className="flex gap-2 items-center">
            <Button size={"sm"} onClick={() => dispatch(toggleIsSearching())}>
              {isSearching ? "HomePage" : "Search"}
            </Button>
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
        <section
          className={cn(
            "min-h-[90vh] h-full w-full max-h-screen flex justify-center items-center z-0 relative",
            isSearching ? `bg-[url(${NETFLIX_BG})] bg-cover` : ""
          )}
        >
          {isSearching ? (
            <SearchSection />
          ) : (
            <>
              <VideoContainer movieId={movies[0]?.id} />
              <div className="absolute bottom-8 py-5 px-20 bg-gradient-to-r from-black from-10% via-80% to-90%  via-black/10 to-transparent">
                <MovieDetails movie={movies[0]} />
              </div>
            </>
          )}
        </section>

        <MovieListSecx data={movies} title="Now Playing" />

        <MovieListSecx data={trendingMovies} title="Trending" />

        <MovieListSecx data={popularMovies} title="Popular" />

        <MovieListSecx data={movies} title="Now Playing" />

        <MovieListSecx data={trendingMovies} title="Trending" />

        <MovieListSecx data={popularMovies} title="Popular" />
        <div className="h-20 w-full" />
      </main>
    </>
  );
}
