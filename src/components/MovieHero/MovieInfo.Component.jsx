import React from "react";
import { useState } from "react";

const MovieInfo = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <>
        <div className="flex flex-col gap-8 ">
          <h1 className="text-white font-bold text-5xl">
            {movie.original_title}
          </h1>
          <div className="text-white flex flex-col gap-2">
            <h4>4k Rating</h4>
            <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
            <h4>
              {movie.runtime} min | {genres}{" "}
            </h4>
          </div>
          <div className="flex items-center gap-3 w-full">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg ">
              Rent ₹ 149
            </button>
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg ">
              Buy ₹ 599
            </button>
          </div>
        </div>
      </>
      ;
    </>
  );
};

export default MovieInfo;
