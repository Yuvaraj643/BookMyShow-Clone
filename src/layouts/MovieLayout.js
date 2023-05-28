import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Movie from '../Pages/MoviePage';


const MovieLayout = (props) => {

  return (
    <>
    <Navbar />
    <Movie />
    {props.children}
    </>
  )
}

export default MovieLayout