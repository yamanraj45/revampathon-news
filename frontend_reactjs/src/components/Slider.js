import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/images/UML-Students-Agenst-Resham.jpeg'
import image1 from '../assets/images/Morocoo.png'
import image2 from '../assets/images/Cholendra_JBR.jpeg'
import { FiArrowRightCircle } from 'react-icons/fi';
import { FiShare2 } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css'


const captionStyle = {
  fontSize: "30px",
  color: "white",
  display: "block",
  fontWeight: "400",
}
const hrBelowStyle = {
  float: "left",
  fontWeight: "100"
}
const hotNewsStyle = {
  display: "inline-flex",
  marginTop: "4em",
  marginBottom:"4em",
  display: "inline-flex",
  // position: "absolute",
  padding: "1em",
  fontSize: "12px"
}

function Slider({news}) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Carousel fade  col={3} >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={news.image}
            alt="slide"
            style={{ height: "100vh", opacity: "0.5" }}
          />
          <Carousel.Caption>
        <span style={{ ...captionStyle }} >{news.title} </span>
            <hr style={{ marginBottom: "2em" }} />
            <span style={{ ...hrBelowStyle }}>
              <FiArrowRightCircle style={{ fontSize: "30px" }} />
              <span style={{ paddingRight: "50px" }}> Read More</span>
              <FiShare2 style={{ fontSize: "30px" }} /> <span>Share &nbsp; - {news.readTime}</span>
            </span>
            <div style={{ ...hotNewsStyle }}>
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Government saddles Sheetal Niwas with disputed ordinance </a>
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Complaint lodged against eight persons on charge of vandalism,
                arson at hydropower office </a>  
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Death toll from Jajarkot jeep mishap reaches 12 </a>  
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> China says situation 'stable' at border with India after clashes </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={image1}
            alt="Second slide"
            style={{ height: '100vh', opacity: "0.5" }}
          />

          <Carousel.Caption >
        <span style={{ ...captionStyle }} > 10 moments in World Cup 2022.</span>
            <hr style={{ marginBottom: "2em" }} />
            <span style={{ ...hrBelowStyle }}>
              <FiArrowRightCircle style={{ fontSize: "30px" }} />
              <span style={{ paddingRight: "50px" }}> Read More</span>
              <FiShare2 style={{ fontSize: "30px" }} /> <span>Share</span>
            </span>
            <div style={{ ...hotNewsStyle }}>
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Government saddles Sheetal Niwas with disputed ordinance </a>
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Complaint lodged against eight persons on charge of vandalism,
                arson at hydropower office </a>  
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Death toll from Jajarkot jeep mishap reaches 12 </a>  
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> China says situation 'stable' at border with India after clashes </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Third slide"
            style={{ height: '100vh', opacity: "0.5" }}
          />
          <Carousel.Caption >
        <span style={{ ...captionStyle }} >Impeachment is only a political weapon</span>
            <hr style={{ marginBottom: "2em" }} />
            <span style={{ ...hrBelowStyle }}>
              <FiArrowRightCircle style={{ fontSize: "30px" }} />
              <span style={{ paddingRight: "50px" }}> Read More</span>

              <FiShare2 style={{ fontSize: "30px" }} /> <span>Share</span>
            </span>
            <div style={{ ...hotNewsStyle }}>
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Government saddles Sheetal Niwas with disputed ordinance </a>
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Complaint lodged against eight persons on charge of vandalism,
                arson at hydropower office </a>  
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> Death toll from Jajarkot jeep mishap reaches 12 </a>  
              <a href='#' style={{ textDecoration: "none", color: "#fff", padding: "10px" }}> China says situation 'stable' at border with India after clashes </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
          </div>

  );
}

export default Slider;