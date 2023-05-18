import React from "react";
import HeroSlider from "react-slick";
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Component
import { NextArrow, PrevArrow } from "./Arrows";

const HeroCarousal = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode : true,
    slidesToShow : 1,
    slidesToScroll : 1,
    centerPadding : "300px",
    infinite:true,
    nextArrow : <NextArrow />,
    prevArrow : <PrevArrow />
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow : <NextArrow />,
    prevArrow : <PrevArrow />
  };

  const images = [
    "https://plus.unsplash.com/premium_photo-1661284807863-89df07cde422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=800",
    "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=800",
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  ];
  return (
    <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
        {images.map((image) => (
          <div className="w-full h-64 md:h-80 py-3">
            <img src={image} alt="testing" className="w-full h-full rounded-md" />
          </div>
        ))}
      </HeroSlider>
    </div>

    <div className="hidden lg:block">
    <HeroSlider {...settingsLg}>
        {images.map((image) => (
          <div className="w-full h-96 px-2 py-3">
            <img src={image} alt="testing" className="w-full h-full rounded-md"/>
          </div>
        ))}
      </HeroSlider>
    </div>

    </>
  );
};

export default HeroCarousal;
