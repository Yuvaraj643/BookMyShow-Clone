import React, { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieHero = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const requestmovieDetails = async () => {
      const getPopularMovies = await axios.get(`/movie/${id}`);
      setMovieDetails(getPopularMovies.data);
    };
    requestmovieDetails();
  }, []);
  console.log(movieDetails);

  const movie = movieDetails;
  console.log(movie);

  if (!movieDetails) {
    return null;
  }

  return (
    <>
      <div>
        <div className="md:hidden ">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="movieposter"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="movieposter"
          />
        </div>
        <div className="relative hidden lg:block" style={{ height: "33rem" }}>
          <div
            className="absolute h-full w-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)",
            }}
          >
            <div className="absolute z-30 w-70 h-96 top-10 left-28 rounded sm">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="movieposter"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="absolute z-40 top-10 left-72 pl-28 text-white">
              <div className="text-4xl font-bold">{movie.title}</div>
              <div className="flex items-center mt-8">
                <BsFillStarFill className="w-10 h-8" />
                <span className="px-2 text-2xl font-bold">
                  {" "}
                  {movie.vote_average}/10{" "}
                </span>
                <span className="flex py-1 px-2">
                  <span className="">{movie.vote_count} votes</span>{" "}
                  <IoIosArrowForward className="w-4 h-4 mt-1" />
                </span>
              </div>
              <div className="flex justify-between  bg-Rating-50 py-2 px-2 my-5 rounded-lg">
                <div className="px-5">
                  <span className="text-lg font-bold">
                    Add your Rating and Review
                  </span>
                  <br></br>
                  <span>Your ratings Matter</span>
                </div>
                <div>
                  <button className="bg-Rating-100 py-2 px-3 rounded-lg text-slate-950 font-bold ml-12 my-2 mr-4">
                    Rate now
                  </button>
                </div>
              </div>
              <div className="mt-5">
                {movie.spoken_languages
                  .map((language) => (
                    <span key={language.iso_639_1}>
                      {language.english_name}
                    </span>
                  ))
                  .reduce((prev, curr) => [prev, ", ", curr])}
              </div>

              <div className="py-2 mt-3">
                {movie.genres
                  .map((genre) => <span key={genre.id}>{genre.name}</span>)
                  .reduce((prev, curr) => [prev, ", ", curr])}
                • {movie.adult ? "18+" : "PG"}
                <br></br> • {movie.release_date}
              </div>

              <button className="bg-SignIn-50 py-3 px-16 rounded lg mt-7">
                Book Tickets
              </button>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="movieposter"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
