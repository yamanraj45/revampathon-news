import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleOnly from './TitleOnly';

const LatestVariant = () => {
  return (
    <section>
        
        <Container>
            <Row>
                <Col sm={7}  style={{paddingTop:'80px'}}>
                    <h2 style={{paddingBottom:'20px'}}>Latest News</h2>
                    <TitleOnly/>
                    <TitleOnly/>
                    <TitleOnly/>
                </Col>
                <Col sm={5}  style={{paddingTop:'170px'}}>
                    <img className='w-100 h-auto' src='https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg' alt=''></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default LatestVariant