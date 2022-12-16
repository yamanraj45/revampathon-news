import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TitleOnly = ({news}) => {
  console.log(news);
  return (
    <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
        <Row>
            <Col sm={6}>
                <p>{news.title}</p>
                <p>{news.body}</p>
                <p>{news.date} {news.readTime}</p>
            </Col>
            <Col sm={6}>
                <p>POLITICS</p>
                <p>Secrets of a successful crypto trader</p>
                <p>14 Feb.100 views</p>
            </Col>
        </Row>
    </Container>
  )
}

export default TitleOnly