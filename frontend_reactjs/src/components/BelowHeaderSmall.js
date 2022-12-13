import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BelowHeaderSmall = () => {
  return (
    <Container>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
            <Col sm={5}>
            <img className='w-100 h-auto' src='https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg' alt=''></img>
            </Col>
            <Col sm={7}>
                <p>Billionare Paul Singer Elliot Management is very good</p>
                <p>12 Feb.200 views</p>
            </Col>
        </Row>
    </Container>
  )
}

export default BelowHeaderSmall