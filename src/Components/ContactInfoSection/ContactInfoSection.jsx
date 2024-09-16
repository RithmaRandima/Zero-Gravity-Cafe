import React from "react";
import "./ContactInfoSection.css";
import ContactInfoBox from "./ContactInfoBox/ContactInfoBox";
import { FaMapLocation } from "react-icons/fa6";
import { FaMailBulk, FaPhoneVolume } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ContactInfoSection = () => {
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
    <>
      <div className="contact-info-container hidden md:grid">
        <ContactInfoBox
          icon={<FaMapLocation />}
          title={"Our Location"}
          titleValue={"Jl. Nusa Dua, Kuta - Bali 80361"}
        />

        <ContactInfoBox
          icon={<FaPhoneVolume />}
          title={"Phone Number"}
          titleValue={"+123 4345 2346"}
        />

        <ContactInfoBox
          icon={<FaMailBulk />}
          title={"Partnership"}
          titleValue={"partnership@domain.com"}
        />
      </div>

      <div className="w-[100%] h-[100%] md:hidden block">
        <Slider {...settings}>
          <ContactInfoBox
            icon={<FaMapLocation />}
            title={"Our Location"}
            titleValue={"Jl. Nusa Dua, Kuta - Bali 80361"}
          />

          <ContactInfoBox
            icon={<FaPhoneVolume />}
            title={"Phone Number"}
            titleValue={"+123 4345 2346"}
          />

          <ContactInfoBox
            icon={<FaMailBulk />}
            title={"Partnership"}
            titleValue={"partnership@domain.com"}
          />
        </Slider>
      </div>
    </>
  );
};

export default ContactInfoSection;
