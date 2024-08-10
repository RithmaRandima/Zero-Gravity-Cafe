import React from "react";
import "./ServicePriceBox.css";
import { FaStar } from "react-icons/fa";

const ServicePriceBox = (props) => {
  return (
    <div className="servicePriceContentBottomBox">
      <img src={props.img} alt="" />
      <div className="serviceContentBottomBoxInfo">
        <p className="serviceTitleName">{props.title}</p>
        <p className="serviceDescriptionInfo">{props.description}</p>
        <div className="serviceMemberRating">
          <div className="starSection">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="serviceBoxPrice">${props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePriceBox;
