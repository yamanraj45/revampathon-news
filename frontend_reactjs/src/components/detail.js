import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header'
// import Slide from './Card'
import SideComponent from './SideComponent';
import image from '../assets/images/election.jpeg'

function Detail() {
  const [news, setNews] = useState([]);
  useEffect(() => {
      const fetchNews = async () => {
          try {
              const response = await axios.get("/news")
              // console.log("hi from homepage news");
              setNews(response.data);
          }
          catch (err) {
              console.log(err);
              console.log("err");
          }
      }
      fetchNews();
  }, [])

  return (
    <section>
        <Header/>
        <Container>
            <Row>                
                        

                <Col md={8}  style={{paddingTop:'40px'}}>
                        <h1 style={{fontWeight:'400', marginBottom:"20px"}}>Sein Fein's Election, Boot Station nearly collapsed.</h1>
                        <p>14 feb. 200 views</p>

                    <img className='w-100 h-auto'  src={image} alt=''></img>

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
        {/* <Slide/> */}
    </section>
  )
}

export default Detail;