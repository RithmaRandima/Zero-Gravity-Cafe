import React from "react";
import "./PricingNewsBox.css";

const PricingNewsBox = (props) => {
  return (
    <div className="newsBottomBox">
      <div className="newsImgContainer">
        <img src={props.img} alt="" />
      </div>
      <div className="newsBoxTopInfo">
        <p>{props.author}</p>
        <p>{props.date}</p>
      </div>
      <div className="newsMiddleInfo">
        <h1 className="newsBoxTitle">{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="newsBottomBtnContainer">
        <button className="newsReadMoreBtn">REad More</button>
      </div>
    </div>
  );
};

export default PricingNewsBox;
