import React from 'react'
import Carousel from "./Carousel.js"
import Card from 'react-bootstrap/Card';

function CarouselCard({ news }) {
    return (
        <>
        <Carousel>

            <div>
                <div style={{ padding: 8 }}>
                    <Card style={{ width: "250px" }} className="border-0 rounded-0" >
                        <Card.Img variant="top" src={news.image} />
                        <Card.Body>
                            <Card.Text> {news.category} - {news.readTime} </Card.Text>
                            <Card.Title>{news.title} </Card.Title>
                            <Card.Text>{news.date} </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div>
                <div style={{ padding: 8 }}>
                    <Card style={{ width: "250px" }} className="border-0 rounded-0" >
                        <Card.Img variant="top" src={news.image} />
                        <Card.Body>
                            <Card.Text> {news.category} - {news.readTime} </Card.Text>
                            <Card.Title>{news.title} </Card.Title>
                            <Card.Text>{news.date} </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Carousel>
            
        </>)
}

export default CarouselCard