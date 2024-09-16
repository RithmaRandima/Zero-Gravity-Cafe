import React from "react";
import "./CinemaPricing.css";
import img1 from "../../Assets/priceMovie-1.webp";
import img2 from "../../Assets/priceMovie-2.webp";

const CinemaPricing = () => {
  return (
    <div className="cinemaPrice hidden md:block">
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
            <img src={img1} alt="" />
          </div>
          <div className="cinemaImgContainerTwo">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaPricing;
