import React from "react";
import "./Staff.css";
import { Parallax } from "react-parallax";
import backgroundImage from "../../Assets/Background-Image.jpg";
import img1 from "../../Assets/staff-1.avif";
import img2 from "../../Assets/staff-2.jpg";
import img3 from "../../Assets/staff-3.jpg";
import img4 from "../../Assets/staff-4.jpg";
import img5 from "../../Assets/staff-5.webp";
import img6 from "../../Assets/staff-6.jpg";
import StaffMemberBox from "../StaffMemberBox/StaffMemberBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Staff = () => {
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
              <StaffMemberBox
                img={img1}
                name="Henry Cavil"
                position="Founder / CEO"
              />
              <StaffMemberBox
                img={img2}
                name="Thisara Perera "
                position="Travel Argent"
              />
              <StaffMemberBox
                img={img3}
                name="Rithma Randima"
                position="Travel Argent"
              />
              <StaffMemberBox
                img={img4}
                name="Tharushi Gunarathne"
                position="Travel Argent"
              />
              <StaffMemberBox
                img={img5}
                name="Amber Heard"
                position="Manager"
              />
              <StaffMemberBox
                img={img6}
                name="Lahiru Chanchala"
                position="Travel Argent"
              />
            </Slider>
          </div>
        </div>
      </Parallax>
      ;
    </div>
  );
};

export default Staff;
