import React from 'react'
import BelowHeader from './BelowHeader'
import Slider from './Slider'
import Slide from './Card'

function News({news}) {
    return (
        <>
            <div>
            {news.map((p) => (
                    <Slider news = {p} />
                ))[3]} 
            {news.map((p) => (
                    <BelowHeader news = {p} />
                ))[0]}               
            </div>
            {news.map(p => (
                    <Slide news={p} />
                ))[1]}
        </>
    )
}

export default News