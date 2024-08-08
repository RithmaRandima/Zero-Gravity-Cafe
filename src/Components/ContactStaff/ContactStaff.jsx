import React from "react";
import "./ContactStaff.css";
import { Parallax } from "react-parallax";
import img1 from "../../Assets/New/pexels-tima-miroshnichenko-6498312.jpg";
import ContactStaffMemberBox from "./ContactStaffMemberBox/ContactStaffMemberBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ContactStaff = () => {
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
    <div className="contactStaffSection">
      <Parallax
        className="contactStaffSectionBackground"
        bgImage={img1}
        strength={200}
      >
        <div className="contactStaffContainer">
          <div className="contactStaffContentTop">
            <div className="contactContentInfo">
              <h1>Contact Us If You Want</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vitae deserunt delectus autem excepturi, quod ex voluptatum
                repellendus aliquid nemo Lorem ipsum dolor, sit amet consectetur
                adalias necessitatibus sint quasi!
              </p>
            </div>
          </div>
          <div className="contactStaffContentBottom">
            <Slider {...settings}>
              <ContactStaffMemberBox
                img={img1}
                name="Rithma Randima"
                position="Owner"
              />
              <ContactStaffMemberBox
                img={img1}
                name="Rithma Randima"
                position="Owner"
              />
              <ContactStaffMemberBox
                img={img1}
                name="Rithma Randima"
                position="Owner"
              />
              <ContactStaffMemberBox
                img={img1}
                name="Rithma Randima"
                position="Owner"
              />
            </Slider>
          </div>
        </div>
      </Parallax>
      ;
    </div>
  );
};

export default ContactStaff;
