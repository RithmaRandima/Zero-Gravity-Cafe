import React from "react";
import "./Staff.css";
import { Parallax } from "react-parallax";
import backgroundImage from "../../Assets/Background-Image.jpeg";
import StaffMemberBox from "../StaffMemberBox/StaffMemberBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { staffData } from "../../Data/StaffData";

const Staff = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 5,
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
    <div className="staffSection">
      <Parallax
        className="staffSectionBackground"
        bgImage={backgroundImage}
        strength={300}
      >
        <div className="staffContainer">
          <div className="staffContentTop">
            <div className="contentInfo">
              <h1>Our Staff</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vitae deserunt delectus autem excepturi, quod ex voluptatum
                repellendus aliquid nemo quam, eius asperiores veniam suscipit
                inventore sequi unde eos sint sapiente
              </p>
            </div>
          </div>
          <div className="staffContentBottom">
            <Slider {...settings}>
              {staffData.map((data) => (
                <StaffMemberBox
                  key={data.id}
                  img={data.img}
                  name={data.name}
                  position={data.position}
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

export default Staff;
