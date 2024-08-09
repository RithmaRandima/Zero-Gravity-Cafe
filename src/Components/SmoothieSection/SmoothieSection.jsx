import React from "react";
import "./SmoothieSection.css";
import img1 from "../../Assets/New/pexels-tima-miroshnichenko-6498312.jpg";
import SmoothieBox from "./SmoothieBox/SmoothieBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SmoothieSection = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="SmoothieSection">
      <div className="SmoothieBoxTitle">
        <h1>Our Staff</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae
          deserunt delectus autem excepturi, quod ex voluptatum repellendus
        </p>
      </div>
      <div className="SmoothieSectionContainer">
        <Slider {...settings}>
          <SmoothieBox img={img1} name="Rithma Randima" price="210" />
          <SmoothieBox img={img1} name="Rithma Randima" price="190" />
          <SmoothieBox img={img1} name="Rithma Randima" price="200" />
          <SmoothieBox img={img1} name="Rithma Randima" price="170" />
          <SmoothieBox img={img1} name="Rithma Randima" price="90" />
        </Slider>
      </div>
      ;
    </div>
  );
};

export default SmoothieSection;
