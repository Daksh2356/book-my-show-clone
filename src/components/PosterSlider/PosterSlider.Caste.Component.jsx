import React from "react";
import Slider from "react-slick";
import CastPoster from "../Poster/CastPoster/Poster.Caste.Component";

const CastPosterSlider = (props) => {
  const { posters, title, subtitle } = props;
  const settings = {
    infinte: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-md text-gray-500">{subtitle}</p>
      </div>
      <Slider {...settings}>
        {posters.map((each, index) => (
          <CastPoster {...each} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default CastPosterSlider;
