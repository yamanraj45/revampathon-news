import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/images/UML-Students-Agenst-Resham.jpeg'
import image1 from '../../assets/images/Morocoo.png'
import image2 from '../../assets/images/Cholendra_JBR.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Slider() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
          style={{width:'auto', minHeight:"100vh"}}
        />
        <Carousel.Caption>
          <h3>रेशम चौधरी छुटाउन खोजिएको भन्दै एमाले निकट अनेरास्ववियुको विरोध प्रदर्शन</h3>
          <hr/>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={image1}
          alt="Second slide"
          style={{height:'100vh'}}
        />

        <Carousel.Caption>
          <h3>विश्वकप २०२२ का १० घटना : जुन कसैले अनुमान नै गरेका थिएनन्</h3>
          <hr/>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          style={{height:'100vh'}}
        />
        <Carousel.Caption>
          <h3>महाभियोग राजनीतिक हतियार मात्र</h3>
          <hr/>
          {/* <p> Praesent commodo cursus magna, vel scelerisque nisl consectetu.  </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;