import { API_OPTIONS } from "@/utils/api/consts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useAddMoviesToStore = (url: string, dispatchFn: (data: any) => any) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await fetch(url, API_OPTIONS);
    const data = await res.json();
    dispatch(dispatchFn(data?.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};
