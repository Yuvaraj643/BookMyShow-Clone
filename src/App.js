import React from 'react'
import DefaultHOC from './HOC/DefaultHOC';
import Temp from './components/temp';
import DefaultLayout from './layouts/DefaultLayout';

const App = () => {
  return (
    <>
    <DefaultHOC path="/" exact element={<DefaultLayout />} />
    </>
  )
}

export default App
