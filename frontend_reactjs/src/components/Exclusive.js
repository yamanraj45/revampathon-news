import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BelowHeader from './BelowHeader';
import BelowHeaderSmall from './BelowHeaderSmall';

const Exclusive = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col sm={8} style={{paddingTop:'40px'}}>
                    <h2 style={{paddingBottom:'20px'}}>Latest News</h2>
                    <img className='w-100 h-auto' src='https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg' alt=''></img>
                    <p>POLITICS</p>
                    <h2>Michael Bloomberg unveils election plan</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>13 Feb.100 views</p>
                </Col>
                <Col sm={4}  style={{paddingTop:'80px'}}>
                    <BelowHeaderSmall/>
                    <hr/>
                    <BelowHeaderSmall/>
                    <hr/>
                    <BelowHeaderSmall/>
                    <hr/>
                    <BelowHeaderSmall/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Exclusive