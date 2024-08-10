import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "./TestimonialBox.css";

const TestimonialBox = (props) => {
  return (
    <div className="testimonial-box">
      <BiSolidQuoteAltLeft className="testiQuoteMark" />
      <h1 className="testiQuote">{props.message}</h1>

      <div className="testiUserSection">
        <div className="testiUserDetails">
          <div className="testUserImgContainer">
            <img src={props.img} alt="" />
          </div>
          <div>
            <p className="testiUserName">{props.name}</p>
            <p className="testiUserCity">{props.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
