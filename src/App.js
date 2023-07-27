import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultHOC from "./HOC/DefaultHOC";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieHOC from "./HOC/MovieHOC";
import MovieLayout from "./layouts/MovieLayout";
import Plays from "./Pages/Plays";
import axios from "axios";
import Loader from "./components/Loader/Loader";
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" exact element={<DefaultLayout />} />
            <Route path="/movie/:id" exact element={<MovieLayout />} />
            <Route path="/plays" exact element={<Plays />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
