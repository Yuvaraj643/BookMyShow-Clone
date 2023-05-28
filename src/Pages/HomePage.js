import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import axios from "axios";
const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcommingMovies, setUpcommingMovies] = useState([]);
  const [guestSessions, setGuestSessions] = useState([]);
  const [tvseries, setTvseries] = useState([]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get("/movie/top_rated");
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, []);
  console.log(recommendedMovies);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);
  console.log(popularMovies);

  useEffect(() => {
    const requestUpcommingMovies = async () => {
      const getUpcommingMovies = await axios.get("/movie/upcoming");
      setUpcommingMovies(getUpcommingMovies.data.results);
    };
    requestUpcommingMovies();
  }, []);
  console.log(upcommingMovies);

  useEffect(() => {
    const requestGuestSessions = async () => {
      const getGuestSessions = await axios.get("/tv/popular");
      setGuestSessions(getGuestSessions.data.results);
    };
    requestGuestSessions();
  }, []);
  console.log(guestSessions);

  useEffect(() => {
    const requestTvseries = async () => {
      const getTvseries = await axios.get("/tv/top_rated");
      setTvseries(getTvseries.data.results);
    };
    requestTvseries();
  }, []);
  console.log(tvseries);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="gap-10 px-auto w-5/6 mx-auto">
          <PosterSlider
            images={popularMovies}
            title="Outdoor Events"
            isDark={false}
          />
        </div>
        <div className="gap-10 px-auto w-5/6 mx-auto">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt="poster"
          />
        </div>
        <div className="gap-10 px-auto w-5/6 mx-auto">
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
            <PosterSlider
              images={recommendedMovies}
              title="Premiers"
              subtitle="Brand new Releases every Friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="gap-10 px-auto w-5/6 mx-auto">
        <PosterSlider
          images={upcommingMovies}
          title="Upcoming Movies"
          isDark={false}
        />
      </div>
      <div className="gap-10 px-auto w-5/6 mx-auto">
        <PosterSlider
          images={tvseries}
          title="Popular Tv Series"
          isDark={false}
        />
      </div>
      <div className="gap-10 px-auto w-5/6 mx-auto">
        <PosterSlider
          images={guestSessions}
          title="Popular Tv Shows"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
