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
        <h1 className="serviceBoxTitle">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi neque
          at nemo!
        </p>
        <button>
          see more <BsArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default AboutServices;
