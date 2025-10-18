import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

export default function Demo() {
  const [name, setName] = useState("");

  const data = useMemo(() => {
    return `this is data ${new Date().toISOString()} - ${name}`;
  }, []);

  return (
    <>
      <main className={`w-full h-full relative flex flex-col bg-black text-white`}>
        <Header />
        <section className={cn("min-h-[90vh] h-full w-full max-h-fit flex mt-20 z-0 relative")}>
          <div className="w-96 h-96 border mx-auto mt-4 p-4 space-y-4">
            <h1 className="text-2xl font-semibold">useMemo</h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                value={name}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setName("");
                  }
                }}
                onChange={(e) => setName(e.target.value)}
                placeholder="Heyy, enter your name and hit ↲"
                autoComplete="off"
              />
            </div>
            <div className="mt-20">{data}</div>
          </div>
        </section>

        <div className="h-20 w-full" />
        <div className="h-20 w-full" />
      </main>
    </>
  );
}
