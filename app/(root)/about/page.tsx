import Hello from "@/app/components/hello";
import MovieCard from "@/app/components/MovieCard";
import { useEffect } from "react";

export interface Movie {
  title: string;
  poster_path: string;
  id: number;
}

export default async function Home() {
  // throw new Error("NOT IMPLEMENTED");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmUwMmZjMDk0MTkzM2RlMTlhMTQwNWIwMWNhYmI0MyIsIm5iZiI6MTczODcwNzc2OC4wMTIsInN1YiI6IjY3YTI5MzM4YThiNmZjZTU1ZDhhNjNlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNgvPp1N6ZD4Coc8RpDqM_D5Ly0NulBy2GIjyOlpGUk",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );

  const data = await response.json();

  if (!response) throw new Error("Failled to fetch data");

  // console.log({ data: await data.results });
  console.log(data);

  // Home();

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] text-2xl items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-blue-700 font-sans lg:text-5xl">
          WELCOME TO MOVIE HOME
        </h1>
        <div className="">
          <ul className="flex flex-wrap text-sm lg:text-3xl">
            {/* {data.map({movie}:{movie: string} => (
              <li> <h1>{movie.title}</h1> </li>
            ))} */}
            {data.results.map((movie: Movie) => (
              <li className="m-1" key={movie.id}>
                <MovieCard
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
