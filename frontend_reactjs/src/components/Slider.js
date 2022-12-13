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

function Slider() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Carousel fade  >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
            style={{ height: "100vh", opacity: "0.5" }}
          />
          <Carousel.Caption>
            <caption style={{ ...captionStyle }} >UML Student Union Protest Against Resham Chaudhari Bail Grant. </caption  >
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
            className="d-block w-100 "
            src={image1}
            alt="Second slide"
            style={{ height: '100vh', opacity: "0.5" }}
          />

          <Carousel.Caption >
            <caption style={{ ...captionStyle }} > 10 moments in World Cup 2022.</caption  >
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
            <caption style={{ ...captionStyle }} >Impeachment is only a political weapon</caption  >
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

      {/* <div style={{ display: "inline-flex", marginTop: "-25em", display: "inline-flex", position: "absolute", padding: "10em", fontSize: "12px" }}>
        <a href='#' style={{textDecoration:"none", color:"#fff", padding:"10px"}}> Government saddles Sheetal Niwas with disputed ordinance </a> 
        <a href='#' style={{textDecoration:"none", color:"#fff",padding:"10px"}}> Complaint lodged against eight persons on charge of vandalism,
         arson at hydropower office </a>  
        <a href='#' style={{textDecoration:"none", color:"#fff",padding:"10px"}}> Death toll from Jajarkot jeep mishap reaches 12 </a>  
        <a href='#' style={{textDecoration:"none", color:"#fff",padding:"10px"}}> China says situation 'stable' at border with India after clashes </a> 
      </div> */}

    </div>

  );
}

export default Slider;