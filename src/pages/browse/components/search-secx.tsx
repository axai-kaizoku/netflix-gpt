import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEARCH_API } from "@/utils/constants";
import { useEffect, useState } from "react";

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setSetSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchSuggestions = async () => {
    const res = await fetch(SEARCH_API + searchTerm);
    const data = await res.json();

    console.log(data[1]);
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
        />
        <Button variant={"outline"}>🔍</Button>
      </div>
      {showSuggestions && (
        <div className="w-60 max-h-40 overflow-y-auto bg-white/10 rounded mt-2">
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
          <div className="py-1.5 px-3 shadow shadow-white/5">Iphone</div>
        </div>
      )}
    </div>
  );
};
