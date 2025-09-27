import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEARCH_API } from "@/utils/constants";
import type { RootState } from "@/utils/store/appStore";
import { addSuggestions } from "@/utils/store/slices/searchSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const cachedSuggestions = useSelector((state: RootState) => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(cachedSuggestions);
      if (cachedSuggestions?.[searchTerm]) {
        setSuggestions(cachedSuggestions[searchTerm]);
      } else {
        fetchSuggestions().then((data) => {
          setSuggestions(data);
          dispatch(
            addSuggestions({
              [searchTerm]: [data],
            })
          );
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchSuggestions = async () => {
    const res = await fetch(SEARCH_API + searchTerm);
    const data = await res.json();

    return data[1];
  };

  return (
    <div>
      <div className="flex items-center">
        <Input
          className="w-60"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="type something"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <Button variant={"outline"}>🔍</Button>
      </div>
      {showSuggestions && (
        <div className="w-60 max-h-40 overflow-y-auto bg-white/10 rounded mt-2">
          {suggestions?.map((s) => (
            <div key={s} className="py-1.5 px-3 shadow shadow-white/5 text-white/90  hover:text-white cursor-pointer">
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
