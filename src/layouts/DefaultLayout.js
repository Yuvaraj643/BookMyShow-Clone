import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal'
import HomePage from '../Pages/HomePage'
import MovieResult from '../Pages/MovieResult';


const DefaultLayout = (props) => {
  const { navbar } = props;

  return (
    <>
      <Navbar />
      {navbar ? (
        <>
          <MovieResult />
          {props.children}
        </>
      ) : (
        <>
          <HeroCarousal />
          <HomePage />
          {props.children}
        </>
      )}
    </>
  );
};


export default DefaultLayout;