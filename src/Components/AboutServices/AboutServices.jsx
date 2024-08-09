import React from "react";
import "./AboutServices.css";
import img from "../../Assets/EventPoster02.jpg";
import { ReactTyped } from "react-typed";
import AboutServiceBox from "../AboutServiceBox/AboutServiceBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutServices = () => {
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
    <div className="aboutServices">
      <div className="aboutServicesContainer">
        <div className="aboutServiceTop">
          <h1>
            <ReactTyped
              strings={[" Our Services"]}
              className="aboutContentSpan"
              typeSpeed={600}
              loop
            />
          </h1>
          <p>
            Lorem dolor, sit amet consectetur adipisicing elit. Magnam aliquid
            autem pariatur aspernatur cumque dignissimos quas molestiae, ea
            explicabo!
          </p>
        </div>
        <div className="aboutServiceBottom">
          <Slider {...settings}>
            <AboutServiceBox img={img} />
            <AboutServiceBox img={img} />
            <AboutServiceBox img={img} />
            <AboutServiceBox img={img} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
