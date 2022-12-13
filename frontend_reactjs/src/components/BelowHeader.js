import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const BelowHeader = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col sm={8} style={{paddingTop:'40px'}}>
                    <img className='w-100 h-100' src='https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg' alt=''></img>
                </Col>
                <Col sm={4}  style={{paddingTop:'80px'}}>
                    <div>
                        <h1 style={{fontWeight:'400'}}>Sein Fein's Election</h1>
                        <p style={{paddingTop:'30px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p>14 feb. 200 views</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default BelowHeader