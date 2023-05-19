import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster";
import settings from "../../config/PosterCarousalConfig";
import PremierImages from "../../config/TempPosterConfig";
const Premier = () => {
  return (
    <>
      <div className="flex-col items-start py-4">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className=" text-sm text-white">Brand new Releases every Friday</p>
      </div>
      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image}/>
        ))}
      </Slider>
    </>
  );
};

export default Premier;
