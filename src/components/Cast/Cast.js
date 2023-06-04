import React from "react";

const Cast = ({ actor }) => {
  return (
    <div className="ml-6 w-full p-2">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          alt={actor.name}
          className="rounded-full p-2"
        />
      </div>

      <h3 className="text-center font-bold text-sm p-1">{actor.name}</h3>
      <div className="flex text-center">
        <span className="text-sm">as</span>
        <p className="text-sm w-full">{actor.character}</p>
      </div>
    </div>
  );
};

export default Cast;
