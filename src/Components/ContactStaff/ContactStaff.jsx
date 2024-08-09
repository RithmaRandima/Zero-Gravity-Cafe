import React from "react";
import "./ContactStaff.css";
import { Parallax } from "react-parallax";
import backgroundImage from "../../Assets/Background-Image.jpg";
import img1 from "../../Assets/staff-1.avif";
import img2 from "../../Assets/staff-2.jpg";
import img3 from "../../Assets/staff-3.jpg";
import img4 from "../../Assets/staff-4.jpg";
import img5 from "../../Assets/staff-5.webp";
import img6 from "../../Assets/staff-6.jpg";
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
        bgImage={backgroundImage}
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
                name="Henry Cavil"
                position="Founder / CEO"
              />
              <ContactStaffMemberBox
                img={img2}
                name="Thisara Perera "
                position="Travel Argent"
              />
              <ContactStaffMemberBox
                img={img3}
                name="Rithma Randima"
                position="Travel Argent"
              />
              <ContactStaffMemberBox
                img={img4}
                name="Tharushi Gunarathne"
                position="Travel Argent"
              />
              <ContactStaffMemberBox
                img={img5}
                name="Amber Heard"
                position="Manager"
              />
              <ContactStaffMemberBox
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

export default ContactStaff;
