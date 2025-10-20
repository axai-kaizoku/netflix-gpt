import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, fibonacci } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Demo() {
  return (
    <>
      <main className={`w-full h-full relative flex flex-col bg-black text-white`}>
        <Header />
        <section className={cn("min-h-[90vh] h-full w-full max-h-fit flex mt-20 z-0 relative")}>
          <Demo1 />
          <Demo2 />
        </section>

        <div className="h-20 w-full" />
        <div className="h-20 w-full" />
      </main>
    </>
  );
}

const Demo1 = () => {
  const [name, setName] = useState(0);
  const themeSwitch = useState(false);

  const number = useMemo(() => {
    if (!Number.isNaN(name)) return fibonacci(name);
  }, [name]);

  return (
    <div className="mx-auto relative w-96 h-96 mt-8">
      <div className={cn("absolute overflow-hidden bg-neutral-50/80   w-full h-full top-0 ")}>
        <div className="w-[200%]  -translate-x-1/5 translate-y-1/4  h-full flex gap-1   -rotate-45">
          {[...new Array(100)].map((_, i) => (
            <div key={i} className="h-full w-1 bg-black/20"></div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "w-full h-full  bg-neutral-800  p-4 space-y-4 -translate-3 duration-300  transition-all active:translate-0",
          themeSwitch[0] ? "bg-neutral-50/95 text-black" : "bg-neutral-600"
        )}
      >
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">useMemo</h1>
          <Button onClick={() => themeSwitch[1]((prev) => !prev)}>Switch</Button>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            value={name}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setName(0);
              }
            }}
            type="number"
            onChange={(e) => {
              console.log(e.target.value);
              setName(parseInt(e.target.value));
            }}
            placeholder="Heyy, enter your name and hit ↲"
            autoComplete="off"
          />
        </div>
        <div className="mt-10">Fibonacci - {number}</div>
      </div>
    </div>
  );
};

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 10;

  const ref = useRef(0);

  const timer = useRef<NodeJS.Timeout | null>(null);
  console.log(timer.current);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("Timer", Date.now());
    }, 1000);

    return () => {
      clearInterval(timer.current!);
    };
  }, []);

  return (
    <div className="mx-auto relative w-96 h-96 mt-8">
      <div className="absolute overflow-hidden   bg-neutral-50/80 w-full h-full top-0 ">
        <div className="w-[200%]   -translate-x-1/5 translate-y-1/4  h-full flex gap-1   -rotate-45">
          {[...new Array(100)].map((_, i) => (
            <div key={i} className="h-full w-1 bg-black/20"></div>
          ))}
        </div>
      </div>
      <div className="w-full h-full  bg-neutral-800  p-4 space-y-4 -translate-3 duration-300  transition-all active:translate-0">
        <h1 className="text-2xl font-semibold">useRef</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              x = x + 1;
              console.log(x);
            }}
          >
            Increase X
          </Button>
          <span>Let x = {x}</span>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              setY(y + 1);
            }}
          >
            Increase Y
          </Button>
          <span>state y = {y}</span>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              ref.current++;
              // console.log(ref.current);
            }}
          >
            Increase Ref
          </Button>
          <span>Ref = {ref.current}</span>
        </div>
        <div className="flex gap-2">
          <Button
            variant={"destructive"}
            onClick={() => {
              clearInterval(timer.current!);
            }}
          >
            Clear Timer
          </Button>
          {JSON.stringify(timer.current)}
        </div>
      </div>
    </div>
  );
};
