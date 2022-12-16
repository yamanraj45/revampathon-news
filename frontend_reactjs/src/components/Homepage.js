import React, { useEffect, useState } from 'react'
import Header from './Header'
import Exclusive from './Exclusive'
import Slider from './Slider';
import LatestNews from './LatestNews';
import { Footer } from './Footer';
import axios from 'axios';
import News from './News';
import CardSlider from './CardSlider';

function Homepage() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("/news")
                // console.log("hi from homepage news");
                setNews(response.data);
            }
            catch (err) {
                console.log(err);
                console.log("err");
            }
        }
        fetchNews();
    }, [])

    return (
        <div >
            <Header />
            {/* <Slider /> */}
            <News news={news} />
            <LatestNews news={news} />
            {/* <Exclusive news={news}/> */}
            <CardSlider news={news} />
            <Footer />
        </div>
    )
}

export default Homepage