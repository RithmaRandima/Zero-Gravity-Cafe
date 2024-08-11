import React from "react";
import "./SmoothieSection.css";
import img1 from "../../Assets/news-3.webp";
import SmoothieBox from "./SmoothieBox/SmoothieBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { smoothieData } from "../../Data/SmoothieData";

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
        <h1>Best Smoothies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae
          deserunt delectus autem excepturi, quod ex voluptatum repellendus
        </p>
      </div>
      <div className="SmoothieSectionContainer">
        <Slider {...settings}>
          {smoothieData.map((data) => {
            return (
              <SmoothieBox
                key={data.id}
                img={data.img}
                name={data.name}
                price={data.price}
              />
            );
          })}
        </Slider>
      </div>
      ;
    </div>
  );
};

export default SmoothieSection;
