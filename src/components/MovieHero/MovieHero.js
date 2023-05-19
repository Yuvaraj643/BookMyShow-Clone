import React from "react";

const MovieHero = () => {
  return (
    <>
      <div className="md:hidden ">
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1683110461.jpg"
          alt="movieposter"
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1683110461.jpg"
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
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-x-et00122562-1683110461.jpg"
              alt="movieposter"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1683110461.jpg"
          alt="movieposter"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
