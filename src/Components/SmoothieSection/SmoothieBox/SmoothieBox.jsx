import React from "react";
import "./SmoothieBox.css";
import { BsArrowUpRight } from "react-icons/bs";

const SmoothieBox = (props) => {
  return (
    <div className="SmoothieBox">
      <img src={props.img} alt="" />
      <div className="SmoothieBoxInfo">
        <div className="info-top-section">
          <p className="SmoothieBoxName">{props.name}</p>
          <p className="SmoothieBoxPrice">${props.price}</p>
        </div>
        <button>
          see more <BsArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default SmoothieBox;
