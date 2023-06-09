import React from "react";
import Slider from "react-slick";
import Cast from "./Cast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const NextArrow = ({ onClick, direction }) => (
  <button
    className={`slider-arrow ${direction} absolute top-28 right-0  transform -translate-y-1/2 right-2 focus:outline-none p-2 rounded-full`}
    onClick={onClick}
    style={{ backgroundColor: "rgb(153, 153, 153)" }}
  >
    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
  </button>
);

const PrevArrow = ({ onClick, direction }) => (
  <button
    className={`slider-arrow ${direction} absolute top-28 left-0 mr-4 transform -translate-y-1/2 left-2 focus:outline-none p-2 rounded-full z-10`}
    onClick={onClick}
    style={{ backgroundColor: "rgb(153, 153, 153)" }}
  >
    <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
  </button>
);

const CastSlider = ({ title, subtitle, cast, crew, isDark }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow direction="next" />,
    prevArrow: <PrevArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex-col items-start py-4">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {cast.map((actor) => (
          <Cast key={actor.id} actor={actor} />
        ))}
      </Slider>
      <div className="flex-col items-start py-4 ">
        <h3
          className={`text-sm font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Crew
        </h3>
      </div>
      <Slider {...settings}>
        {crew.map((member) => (
          <div>
            <div key={member.id} className="ml-6 w-full p-2">
              <img
                src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
                alt={member.name}
                className="rounded-full p-2"
              />
                <h3 className="text-center font-bold text-sm p-1">{member.name}</h3>
                <h2 className="text-sm w-full text-center">{member.job}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CastSlider;
