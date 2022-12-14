import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header'
import CardSlide from './card'
import SideComponent from './SideComponent';

function Detail() {
  return (
    <section>
        <Header/>
        <Container>
            <Row>                
                        

                <Col md={8}  style={{paddingTop:'40px'}}>
                        <h1 style={{fontWeight:'400', marginBottom:"20px"}}>Sein Fein's Election, Boot Station nearly collapsed.</h1>
                        <p>14 feb. 200 views</p>

                    <img style={{height:"35em"}} src='https://pixabay.com/get/g842edb02090f58e62f4cc26b364eabf3ff4a818ede9f26000fa77256067fe8a014868ccc61c9db579cd1d700ba6b7779a3011dc99b6dc8f50e23d0901a106152fba73aa95e5b20538b9416edd1037e3c_1920.jpg' alt=''></img>

                    <div className='container'>
                        <p style={{paddingTop:'30px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                </Col>
                <Col  md={4}  style={{paddingTop:'80px'}}>
                  <SideComponent/>
                </Col>
            </Row>
        </Container>
        <CardSlide/>
    </section>
  )
}

export default Detail;