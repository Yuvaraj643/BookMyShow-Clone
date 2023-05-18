import React from 'react'
import DefaultHOC from './HOC/DefaultHOC';
// import Temp from './components/temp';
import DefaultLayout from './layouts/DefaultLayout';


//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
    <DefaultHOC path="/" exact element={<DefaultLayout/>} />
    </>
  )
}

export default App
