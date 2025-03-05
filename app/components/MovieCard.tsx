import React from "react";
import { Movie } from "../(root)/about/page";
import Image from "next/image";

const MovieCard = ({ title, poster_path }: Movie) => {
  return (
    <div className="h-[7rem] w-[4rem]  text-sm lg:text-lg lg:h-[15rem] lg:w-[12rem] ">
      <div className="flex justify-center items-center flex-col">
        <img
          className="h-[5rem] w-[4rem]  lg:h-[13rem] lg:w-[12rem]"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
