import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const cardSlider = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col sm={4} style={{paddingTop:'80px'}}>
                    <Card className="border-0 rounded-0" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg" />
                        <Card.Body>
                            <Card.Text>Politics</Card.Text>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>14th Feb. 100 views</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}  style={{paddingTop:'80px'}}>
                    <Card className="border-0" style={{ width: '25rem' }}>
                            <Card.Img variant="top" src="https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg" />
                            <Card.Body>
                                <Card.Text>Politics</Card.Text>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>14th Feb. 100 views</Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
                <Col sm={4}  style={{paddingTop:'80px'}}>
                    <Card className="border-0" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg" />
                        <Card.Body>
                            <Card.Text>Politics</Card.Text>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>14th Feb. 100 views</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default cardSlider