import React from 'react'
import DefaultHOC from './HOC/DefaultHOC';
import DefaultLayout from './layouts/DefaultLayout';
import MovieHOC from './HOC/MovieHOC';
import MovieLayout from './layouts/MovieLayout';
import Plays from './Pages/Plays';
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
