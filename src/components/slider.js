import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import icon from "../images/gurupi-icon.png"
import firstMeeting from "../images/first-meeting.jpeg"

const SimpleSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ maxWidth: "800px"}}>
      <a name="home"></a>
        <Slider {...settings}>
          <div>
            <img src={ icon } />
          </div>
          <div>
            <img src={ firstMeeting } />
            <p>Palestrantes do Encontro que ocorreu dia 11 de dezembro de 2019</p>
          </div>
          
        </Slider>
      </div>
    );
}

export default SimpleSlider;
