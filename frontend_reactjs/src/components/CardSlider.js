import React from 'react'
import Slide from './Card'



function CardSlider({ news }) {

    return (
        <>
            {/* <div className="container" >
                <span style={{ fontSize: "30px" }}>Top News</span>
                <hr />
                {news.map(p => (
                    <Slide news={p} />
                ))[5]}
                    </div> */}
                    {/* <div className="container" >
                <span style={{ fontSize: "30px" }}>You May Also Like</span>
                <hr />
                {news.map(p => (
                    <Slide news={p} />
                ))[30]}
                    </div> */}
        </>
    )
}

export default CardSlider;
