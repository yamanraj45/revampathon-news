import React from 'react'
import Header from './components/Header'
import BelowHeader from './components/BelowHeader'
import CardSlider from './components/CardSlider'
import Exclusive from './components/Exclusive'
import Slider from './components/Slider';
import Latest from './components/Latest'
import LatestVariant from './components/LatestVariant'

export const App = () => {
  return(
    <div>
      <Header/>
      <Slider/>
      <BelowHeader/>
      <CardSlider/>
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