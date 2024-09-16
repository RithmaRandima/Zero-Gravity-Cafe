import React from "react";
import "./ServiceTypes.css";
import box_img_01 from "../../Assets/ServiceBoxImg1.png";
import box_img_02 from "../../Assets/ServiceBoxImg2.png";
import box_img_03 from "../../Assets/ServiceBoxImg3.png";
import box_img_04 from "../../Assets/ServiceBoxImg4.png";
import ServiceBox from "./ServiceBox/ServiceBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ServiceTypes = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="serviceType">
      <div className="container">
        <div className="serviceTop">
          <h1>Our Experience</h1>
          <h1>Discover Our Worlds</h1>
        </div>
        {/* desktop */}
        <div className="serviceBottom hidden md:grid">
          <ServiceBox
            img={box_img_01}
            title="Lorem ipsum dolor sit."
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
          />

          <ServiceBox
            img={box_img_02}
            title="Lorem ipsum dolor sit."
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
          />

          <ServiceBox
            img={box_img_03}
            title="Lorem ipsum dolor sit."
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
          />

          <ServiceBox
            img={box_img_04}
            title="Lorem ipsum dolor sit."
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
          />
        </div>

        {/* mobile */}
        <div className="md:hidden block w-[100%] h-[100%]">
          <Slider {...settings}>
            <ServiceBox
              img={box_img_01}
              title="Lorem ipsum dolor sit."
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
            />

            <ServiceBox
              img={box_img_02}
              title="Lorem ipsum dolor sit."
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
            />

            <ServiceBox
              img={box_img_03}
              title="Lorem ipsum dolor sit."
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
            />

            <ServiceBox
              img={box_img_04}
              title="Lorem ipsum dolor sit."
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus?"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypes;
