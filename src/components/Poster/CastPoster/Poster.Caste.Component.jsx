import React from "react";

const CastPoster = (props) => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3 ">
        <div className="h-100 md:h-120 ">
          <img
            className="w-full h-full rounded-md"
            src={`https://image.tmdb.org/t/p/original/${props.profile_path}`}
            alt="Poster"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-700">{props.name}</h3>
        <h5 className="text-lg font-400 text-gray-400">{props.character}</h5>
      </div>
    </>
  );
};

export default CastPoster;
