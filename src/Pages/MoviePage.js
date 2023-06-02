import React, { useState, useEffect } from "react";
import MovieHero from "../components/MovieHero/MovieHero";
import axios from "axios";
import { useParams } from "react-router-dom";
import CastSlider from "../components/Cast/CastSlider";
import PosterSlider from "../components/PosterSlider/PosterSlider";

const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [upcommingMovies, setUpcommingMovies] = useState([]);

  useEffect(() => {
    const requestUpcommingMovies = async () => {
      const getUpcommingMovies = await axios.get(`/movie/${id}/recommendations`);
      setUpcommingMovies(getUpcommingMovies.data.results);
    };
    requestUpcommingMovies();
  }, [id]);
  console.log(upcommingMovies);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const getPopularMovies = await axios.get(`/movie/${id}`);
      setMovieDetails(getPopularMovies.data);
      const creditsResponse = await axios.get(`/movie/${id}/credits`);
      setCast(creditsResponse.data.cast.slice(0, 10));
      const filteredCrew = creditsResponse.data.crew.filter(
        (member) =>
          member.department === "Directing" ||
          member.department === "Production" ||
          member.department === "Sound" ||
          member.department === "Camera" ||
          member.department === "Editing" ||
          member.department === "Writing" ||
          member.department === "Art" ||
          member.department === "Visual Effects"
      );

      const crewWithProfile = filteredCrew
        .filter((member) => member.profile_path)
        .slice(0, 10);

      setCrew(crewWithProfile);
    };
    fetchMovieDetails();
  }, [id]);
  console.log(crew);

  const movie = movieDetails;
  console.log(movie);

  if (!movieDetails) {
    return null;
  }
  return (
    <>
      <MovieHero />
      <div className="my-3 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-gray-800 font-bold text-2xl">
            Applicable Offers
          </h1>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md px-4 py-3 w-96 my-5">
            <img
              src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202"
              className="w-6 h-6"
              alt=""
            />
            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
              <p className="text-gray-600">10% off on Movie munchies!</p>
            </div>
          </div>
        </div>
        <div>
          <CastSlider
            title="Cast"
            subtitle="Main cast"
            cast={cast}
            crew={crew}
            isDark={false}
          />
        </div>
      </div>
      <div className="gap-10 px-auto w-5/6 mx-auto">
        <PosterSlider
          images={upcommingMovies}
          title="Recommended Movies"
          isDark={false}
        />
      </div>
    </>
  );
};

export default Movie;
