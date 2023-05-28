import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Movie from '../Pages/MoviePage';
import { useParams } from 'react-router-dom';

const MovieLayout = (props) => {
  const { id } = useParams();
  return (
    <>
    <Navbar />
    <Movie />
    {props.children}
    </>
  )
}

export default MovieLayout