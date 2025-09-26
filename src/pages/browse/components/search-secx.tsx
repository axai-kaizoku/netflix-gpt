import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("SEarch term", searchTerm);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

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
    </div>
  );
};
