import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleOnly from './TitleOnly';

const Latest = ({ news}) => {

    return (
        <section>
            <Container>
                <Row>
                        <h2 style={{ paddingBottom: '20px' }}>{news.category}</h2>
                    <Col  style={{ paddingTop: '40px' }}>
                        <img className='w-100 h-100' src={news.image} alt=''></img>
                    </Col>
                    {/* <Col sm={7} style={{ paddingTop: '80px' }}>
                        <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            
                            <Row>
                            <Col sm={6}>
                                    <p style={{fontWeight:"700"}}>{news.title}</p>
                                    <p>{news.date} - {news.readTime}</p>
                                    <p>{news.body}</p>
                                </Col>
                                <Col sm={6}>
                                    <p style={{fontWeight:"700"}}>{news.title}</p>
                                    <p>{news.date}  - {news.readTime}</p>
                                    <p>{news.body}</p>
                                </Col>                             
                            </Row>
                        </Container>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Latest