import React from 'react'
import Header from './components/Header'
import BelowHeader from './components/BelowHeader'
import CardSlider from './components/CardSlider'
import Exclusive from './components/Exclusive'
import Slider from './components/Slider';
import CardSlide from './components/card';
import Latest from './components/Latest';
import LatestVariant from './components/LatestVariant'

export const App = () => {
  return(
    <div>
      <Header/>
      <Slider/>
      <BelowHeader/>
      <CardSlide/>
      <Exclusive/>   
      <Latest/>
      <CardSlider/>
      <LatestVariant/>
      <Exclusive/>
      <CardSlider/>
    </div>
  )
}

export default App;