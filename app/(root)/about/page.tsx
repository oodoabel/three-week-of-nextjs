import Hello from "@/app/components/hello";
import MovieCard from "@/app/components/MovieCard";
import { useEffect } from "react";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();
  console.log(albums);

  return (
    <>
      <div className="grid grid-rows-1 sm:grid-cols-1 text-2xl items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-wrap overflow-hidden">
          {albums.map((albums: { id: number; title: string }) => (
            <div className="text-white" key={albums.id}>
              <h2>{albums.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
