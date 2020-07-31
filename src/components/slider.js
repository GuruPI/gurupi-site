import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gurupi1 from "../images/first-meeting.jpeg"
import peopleFirstMeeting from "../images/people-first-meeting.jpg"
import gurupi2 from "../images/second-meeting.jpeg"

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{ maxWidth: "600px"}}>
      <hr />
      <h1><a name="photos">Fotos</a></h1>
      <Slider {...settings}>
        <div>
          <img src={ gurupi1 } />
          <p>Palestrantes do Encontro GuruPI #1 que ocorreu dia 11 de janeiro de 2020</p>
        </div>
        <div>
          <img src={ peopleFirstMeeting } />
          <p>Público do encontro GuruPI #1 que ocorreu dia 11 de janeiro de 2020</p>
        </div>
        <div>
          <img src={ gurupi2 } />
          <p>Palestrantes do encontro GuruPI #2 que ocorreu dia 15 de fevereiro de 2020</p>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
