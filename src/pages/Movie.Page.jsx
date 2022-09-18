import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieLayoutHoc from "../layout/Movie.Layout";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/Movie.context";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import CastPosterSlider from "../components/PosterSlider/PosterSlider.Caste.Component";
import MovieHero from "../components/MovieHero/MovieHero.Component";

const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilar = async () => {
      const getSimilar = await axios.get(`movie/${id}/similar`);
      setSimilarMovies(getSimilar.data.results);
    };
    requestSimilar();
  }, [id]);

  useEffect(() => {
    const requestRecommended = async () => {
      const getRecommended = await axios.get(`movie/${id}/recommendations`);
      setRecommendedMovies(getRecommended.data.results);
    };
    requestRecommended();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`);
      setMovie(getMovie.data);
    };
    requestMovie();
  }, [id]);

  const settingCast = {};
  const settings = {
    infinte: false,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl ">About the Movie</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off upto INR 150 on all Rupay Cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off upto INR 150 on all Rupay Cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 ">
          <hr />
        </div>

        <div className="my-8">
          <CastPosterSlider
            config={settingCast}
            posters={cast}
            subtitle="Cast"
          />
        </div>

        <div className="my-8 ">
          <hr />
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isdark={false}
            subtitle=""
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            config={settings}
            title="Similar Movies"
            posters={similarMovies}
            isdark={false}
          />
        </div>
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
