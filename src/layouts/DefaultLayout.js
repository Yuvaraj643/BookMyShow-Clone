import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroCarousal from '../components/HeroCarousal/HeroCarousal'
import HomePage from '../Pages/HomePage'

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousal />
    <HomePage />
    {props.children}
    </>
  )
}

export default DefaultLayout;