import React from "react";
import "./CinemaPricing.css";
import img from "../../Assets/EventPoster02.jpg";

const CinemaPricing = () => {
  return (
    <div className="cinemaPrice">
      <div className="cinemaPriceContainer">
        <div className="cinemaPriceContainerLeft">
          <h1 className="cinemaPriceTitle">
            New Experience in Watching Movies
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            consequatur esse eaque suscipit numquam. Quasi debitis, temporibus
            ad, quidem accusamus inventore eius necessitatibus repellat est
            architecto beatae
          </p>
          <h1 className="cinemaPriceTextH1">
            Just for <span className="cinemaPriceText">$120.00</span>
          </h1>
        </div>
        <div className="cinemaPriceContainerRight">
          <div className="cinemaImgContainerOne">
            <img src={img} alt="" />
          </div>
          <div className="cinemaImgContainerTwo"></div>
        </div>
      </div>
    </div>
  );
};

export default CinemaPricing;
