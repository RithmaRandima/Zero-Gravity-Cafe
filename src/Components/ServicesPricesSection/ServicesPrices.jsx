import React from "react";
import "./ServicesPrices.css";
import { Parallax } from "react-parallax";
import backgroundImg from "../../Assets/Service-Price-BG.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serviceData } from "../../Data/ServiceData";
import ServicePriceBox from "./ServicePriceBox/ServicePriceBox";

const ServicesPrices = () => {
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
    <div className="servicePrice">
      <Parallax
        className="servicePriceBackground"
        bgImage={backgroundImg}
        strength={300}
      >
        <div className="servicePriceContainer">
          <div className="serviceContentTop">
            <div className="serviceContentInfo">
              <h1>Enjoy Your Free Time</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vitae deserunt delectus autem excepturi, quod ex voluptatum
                repellendus a liquid nemo quam, eius eos sint sapiente
              </p>
            </div>
          </div>
          <div className="servicePriceContentBottom">
            <Slider {...settings}>
              {serviceData.map((data) => (
                <ServicePriceBox
                  img={data.img}
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  price={data.price}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Parallax>
      ;
    </div>
  );
};

export default ServicesPrices;
