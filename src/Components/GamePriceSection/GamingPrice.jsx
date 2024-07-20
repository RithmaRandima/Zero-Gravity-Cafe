import React from "react";
import "./GamingPrice.css";
import img from "../../Assets/EventPoster02.jpg";

const GamingPrice = () => {
  return (
    <div className="gamingPrice">
      <div className="gamingPriceContainer">
        <div className="gamingPriceContainerLeft">
          <div className="gamingImgContainerOne">
            <img src={img} alt="" />
          </div>
          <div className="gamingImgContainerTwo"></div>
        </div>
        <div className="gamingPriceContainerRight">
          <h1 className="gamingPriceTitle">New Experience in Playing Games</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            consequatur esse eaque suscipit numquam. Quasi debitis, temporibus
            ad, quidem accusamus inventore eius necessitatibus repellat est
            architecto beatae
          </p>
          <h1 className="gamingPriceTextH1">
            Just for <span className="gamingPriceText">$220.00</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GamingPrice;
