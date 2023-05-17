import React from 'react'
import Navbar from '../components/Navbar/navbarcomponent'


const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    {props.children}
    </>
  )
}

export default DefaultLayout;