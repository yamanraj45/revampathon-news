import React from 'react'
import Header from './Header'
import BelowHeader from './BelowHeader'
import Exclusive from './Exclusive'
import Slider from './Slider';
import CardSlide from './card';
import Latest from './Latest';
import LatestVariant from './LatestVariant';
import { Footer } from './Footer';

function Homepage() {
    return (
        <div>
            <Header />
            <Slider />
            <BelowHeader />
            <CardSlide />
            <Latest />
            <LatestVariant />
            <Exclusive />
            <CardSlide />
            <Footer />
        </div>
    )
}

export default Homepage