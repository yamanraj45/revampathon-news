import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BelowHeader from './BelowHeader';
import BelowHeaderSmall from './BelowHeaderSmall';

const Exclusive = ({news}) => {
  return (
    <section>
        <Container>
            <Row>
                <Col sm={12} style={{paddingTop:'40px'}}>
                    <h2 style={{paddingBottom:'20px'}}>{news.category}</h2>
                    <img className='w-100 h-auto' src={news.image} alt=''></img>
                    <p>{news.category}</p>
                    <h2>{news.title}</h2>
                    <p> {news.body} </p>
                    <p>{news.date } - {news.readTime} </p>
                </Col>
                {/* <Col sm={}  style={{paddingTop:'80px'}}>

                    <BelowHeaderSmall/>
                    <hr/>
                    <BelowHeaderSmall/> 
                    <hr/>
                    <BelowHeaderSmall/> 
                     <hr/> 
                     <BelowHeaderSmall/> 
                     <hr/> 
                     <BelowHeaderSmall/> 

                </Col> */}
            </Row>
        </Container>
    </section>
  )
}

export default Exclusive