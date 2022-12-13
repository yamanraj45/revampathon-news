import React from 'react'
import Header from './components/Header'
import BelowHeader from './components/BelowHeader'
import CardSlider from './components/CardSlider'
import Exclusive from './components/Exclusive'
import Slider from './components/Slider';

export const App = () => {
  return(
    <div>
      <Header/>
      <BelowHeader/>
      <CardSlider/>
      <Exclusive/>
      <Slider/>
    </div>
  )
}

export default App;