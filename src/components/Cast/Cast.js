import React from "react";

const Cast = ({ actor }) => {
  return (
    <div className="w-3/4 ml-6">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          alt={actor.name}
          className="rounded-full"
        />
      </div>
      
      <h3 className="text-center font-bold">{actor.name}</h3><div className="flex"><span>as&nbsp; </span> 
      <p >{actor.character}</p></div>
    </div>
  );
};

export default Cast;
