import React from 'react'
import Header from './Header'
import BelowHeader from './BelowHeader'
import Exclusive from './Exclusive'
import Slider from './Slider';
import CardSlide from './card'

function Homepage() {
    return (
        <div>
            <Header />
            <Slider />
            <BelowHeader />
            <CardSlide />
            <Exclusive />
        </div>
    )
}

export default Homepage