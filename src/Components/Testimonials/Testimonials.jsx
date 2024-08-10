import React from "react";
import "./Testimonials.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import TestimonialBox from "./TestimonialBox/TestimonialBox";
import { testimonialData } from "../../Data/TestimonialData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
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
    <div className="testimonials">
      <div className="testiContainer">
        <div className="testiLeft">
          <h1>What People Say</h1>
          <h1>About Zero Gravity Cafe</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dolorum eligendi provident inventore ipsam quo fugit quae esse quod
            quam veniam amet beatae, consequatur corporis enim veritatis
            exercitationem placeat! Maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            debitis deserunt? Expedita praesentium voluptate error excepturi
            distinctio! Eaque quam dicta beatae autem aut porro cumque incidunt
            inventore? Ratione omnis minus, deleniti est, odio ullam
            reprehenderit beatae vitae nam repellat sed praesentium doloremque
            eligendi ipsa? Officiis iste minima assumenda voluptates earum
            animi. Suscipit eos velit, praesentium nisi est voluptates in vel,
            explicabo odio qui blanditiis optio?
          </p>
        </div>
        <div className="testiRight">
          {/* <BiSolidQuoteAltLeft className="testiQuoteMark" />
          <h1 className="testiQuote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat
            sapiente at ducimus inventore, aperiam non enim cumque error
            suscipit quibusdam soluta! Animi excepturi similique magni quam!
            Qui, itaque aut!
          </h1>

          <div className="testiUserSection">
            <div className="testiUserDetails">
              <div className="testUserImgContainer">
                <img src={userImg} alt="" />
              </div>
              <div>
                <p className="testiUserName">RIthma Randima</p>
                <p className="testiUserPosition">Sales Manager</p>
              </div>
            </div>
          </div> */}
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <TestimonialBox
                key={data.id}
                img={data.img}
                message={data.message}
                name={data.name}
                city={data.city}
              />
            ))}
          </Slider>
        </div>
        <div className="testiButtonContainer">
          <button className="testiBtn testiBtnLeft">
            <FaArrowLeft className="btnIcon" />
          </button>
          <button className="testiBtn testiBtnRight">
            <FaArrowRight className="btnIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
