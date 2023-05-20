import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import PremierImages from "../config/TempPosterConfig";
const HomePage = () => {
  return (
    <>
    <div className="flex flex-col gap-10">
      <div className="gap-10 px-auto">
      <h1 className="text-2xl font-bold text-gray-800 px-2 py-2">
        The Best of Live Events
      </h1>
      <div>
        <EntertainmentCardSlider />
      </div>
      </div>
      <div className="bg-navCol-200 py-16">
        <div className="container mx-auto px-4">
          <div className="flex">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider images={PremierImages} title="Premiers" subtitle="Brand new Releases every Friday" isDark/>
        </div>
      </div>
      </div>

      <div >
        <PosterSlider
        images={PremierImages}
        title="Online Streaming Events"
        isDark={false}
        />
      </div>
      <div>
        <PosterSlider
        images={PremierImages}
        title="Outdoor Events"
        isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
