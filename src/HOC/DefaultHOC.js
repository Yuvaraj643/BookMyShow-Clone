import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const DefaultHOC = ({ component: Component, ...props }) => {
  return (
    <>
    <Routes>
      <Route
        {...props}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
      </Routes>
    </>
  );
};

export default DefaultHOC;
