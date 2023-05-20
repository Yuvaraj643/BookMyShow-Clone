import React from "react";
import MovieHero from "../components/MovieHero/MovieHero";
const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p>
            Dom Toretto and his family must confront a terrifying new enemy
            who`s fueled by revenge
          </p>
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
      </div>
    </>
  );
};

export default Movie;
