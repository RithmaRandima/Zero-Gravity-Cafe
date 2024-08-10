import React from "react";
import "./AboutServiceBox.css";
import { BsArrowUpRight } from "react-icons/bs";

const AboutServices = (props) => {
  return (
    <div className="aboutServiceBox">
      <div className="serviceBoxImg">
        <img src={props.img} alt="" />
      </div>
      <div className="serviceBoxInfo">
        <h1 className="serviceBoxTitle">{props.title}.</h1>
        <p>{props.description}</p>
        <button>
          see more <BsArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default AboutServices;
