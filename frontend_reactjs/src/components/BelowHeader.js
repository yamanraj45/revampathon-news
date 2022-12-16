import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const BelowHeader = ({ news }) => {
    // console.log("working");

    return (
        <section>
            <Container style={{ paddingTop: "10em", paddingBottom: "5em" }}>
                <Row>
                    <Col sm={8} style={{ paddingRight: '40px', }}>
                        <img className='w-100 h-100' src={news.image} alt=''></img>
                    </Col>

                    <Col sm={4} style={{ paddingTop: '40px' }}>
                        <div>
                            <span style={{ fontWeight: '800', fontSixe: '50px' }}> {news.title} </span><br />
                            <span style={{ fontSixe: '10px' }}>  {news.readTime} </span>
                            <p style={{ paddingTop: '30px' }}> {news.body} </p>
                            <span style={{ fontSixe: '10px' }}>  {news.date} </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BelowHeader;