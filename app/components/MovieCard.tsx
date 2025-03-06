import React from "react";
import { Movie } from "../(root)/about/page";
import Image from "next/image";

const MovieCard = ({ title, poster_path }: Movie) => {
  return (
    <div className="  text-sm lg:text-lg lg:h-[15rem] lg:w-[13rem]  ">
      <div className=" flex justify-center items-center flex-col ">
        <img
          className="h-[8rem] w-[8rem]  lg:h-[13rem] lg:w-[13rem]"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
