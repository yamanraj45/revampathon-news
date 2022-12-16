import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BelowHeaderSmall = ({news}) => {
  return (
    <Container>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
            <Col sm={5}>
            <img className='w-100 h-auto' src={news.image} alt=''></img>
            </Col>
            <Col sm={7}>
                <p>{news.title}</p>
                <p>{news.date} - {news.readTime} </p>
            </Col>
        </Row>
    </Container>
  )
}

export default BelowHeaderSmall