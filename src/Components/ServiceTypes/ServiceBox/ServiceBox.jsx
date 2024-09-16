import React from "react";

const ServiceBox = (props) => {
  return (
    <div className="serviceBox">
      <div className="middleText">
        <h1>Lorem ipsum dolor sit.{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          repellendus?{props.description}
        </p>
      </div>
      <img
        // src={box_img_03}
        src={props.img}
        alt=""
      />
      <button className="serviceBoxBookBtn">Book Now</button>
    </div>
  );
};

export default ServiceBox;
