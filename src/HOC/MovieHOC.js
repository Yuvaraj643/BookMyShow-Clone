import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieLayout from "../layouts/DefaultLayout";

const MovieHOC = ({ component: Component, ...props }) => {
  return (
    <>
    <Routes>
      <Route
        {...props}
        component={(props) => (
          <MovieLayout>
            <Component {...props} />
          </MovieLayout>
        )}
      />
      </Routes>
    </>
  );
};

export default MovieHOC;
