import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from "./Carousel.js"

  const Slide = ({news}) => {
    return (
        <>
         <div className="container" style={{ marginTop: "100px", marginBottom: "100px" }}>
         <span style={{ fontSize: "30px" }}>Top News</span>
                <hr />
              <Carousel show={3} key={news.id}>
                  <div>
                      <div style={{ padding: 8 }}>
                          <Card style={{width:"250px"}} className="border-0 rounded-0" >
                              <Card.Img  variant="top" src={news.image} />
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
                          <Card style={{width:"250px"}} className="border-0 rounded-0" >
                              <Card.Img  variant="top" src={news.image} />
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
                          <Card style={{width:"250px"}} className="border-0 rounded-0" >
                              <Card.Img  variant="top" src={news.image} />
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
                          <Card style={{width:"250px"}} className="border-0 rounded-0" >
                           <Card.Img  variant="top" src={news.image} /> 
                              <Card.Body>
                                  <Card.Text> {news.category} - {news.readTime} </Card.Text>
                                  <Card.Title>{news.title} </Card.Title>
                                  <Card.Text>{news.date} </Card.Text>
                              </Card.Body>
                          </Card>
                      </div>
                  </div>
            
              </Carousel>
          </div>
          </>
    )
}

export default Slide
