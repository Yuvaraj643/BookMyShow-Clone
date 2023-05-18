import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import Premier from "../components/Premier/Premier";
const HomePage = () => {
  return (
    <div className="container mx-auto px-0">
      <h1 className="text-2xl font-bold text-gray-800">
        Recommended Movies
      </h1>
      <Premier />
      <h1 className="text-2xl font-bold text-gray-800">
        The Best of Live Events
      </h1>
      <EntertainmentCardSlider />
    </div>
  );
};

export default HomePage;
