import React from 'react'
import DefaultHOC from './HOC/DefaultHOC';
import DefaultLayout from './layouts/DefaultLayout';
import MovieHOC from './HOC/MovieHOC';
import MovieLayout from './layouts/MovieLayout';
import Plays from './Pages/Plays';
import axios from "axios";
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params ={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


const App = () => {
  return (
    <>
    <DefaultHOC path="/" exact element={<DefaultLayout/>} />
    <MovieHOC path='/movie/:id' exact element={<MovieLayout/>} />
    <DefaultHOC path="/plays" exact element={<Plays/>} />
    </>
  )
}

export default App
