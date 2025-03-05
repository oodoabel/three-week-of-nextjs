"use client";

interface params {}

import React from "react";

const Hello = ({ movies }: params) => {
  return (
    <div>
      <h1 className="text-2x text-black rounded-lg h-20 w-20 bg-amber-100 flex justify-center items-center flex-col">
        Hello
      </h1>
    </div>
  );
};

export default Hello;
