import React from "react";

const Poster = (props) => {
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
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
      </div>
    </>
  );
};

export default Poster;
