import React from "react";
import "./ServicesPrices.css";
import { Parallax } from "react-parallax";
import backgroundImg from "../../Assets/New/Service-Price-BG.jpg";
import imgOne from "../../Assets/New/service-price-img-01.jpg";
import imgTwo from "../../Assets/New/service-price-img-02.jpg";
import imgThree from "../../Assets/New/service-price-img-03.jpg";
import imgFour from "../../Assets/New/service-price-img-04.jpg";

const ServicesPrices = () => {
  return (
    <div className="servicePrice">
      <Parallax
        className="servicePriceBackground"
        bgImage={backgroundImg}
        strength={300}
      >
        <div className="servicePriceContainer">
          <div className="serviceContentTop">
            <div className="serviceContentInfo">
              <h1>Enjoy Your Free Time</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vitae deserunt delectus autem excepturi, quod ex voluptatum
                repellendus a liquid nemo quam, eius eos sint sapiente
              </p>
              <button className="servicePriceContactBtn">Contact US</button>
            </div>
          </div>
          <div className="servicePriceContentBottom">
            <div className="servicePriceContentBottomBox">
              <img src={imgOne} alt="" />
              <div className="serviceContentBottomBoxInfo">
                <p className="serviceMemberName">Rithma Randima</p>
                <p className="serviceMemberPosition">Owner</p>
              </div>
            </div>

            <div className="servicePriceContentBottomBox">
              <img src={imgTwo} alt="" />
              <div className="serviceContentBottomBoxInfo">
                <p className="serviceMemberName">Rithma Randima</p>
                <p className="serviceMemberPosition">Owner</p>
              </div>
            </div>

            <div className="servicePriceContentBottomBox">
              <img src={imgThree} alt="" />
              <div className="serviceContentBottomBoxInfo">
                <p className="serviceMemberName">Rithma Randima</p>
                <p className="serviceMemberPosition">Owner</p>
              </div>
            </div>

            <div className="servicePriceContentBottomBox">
              <img src={imgFour} alt="" />
              <div className="serviceContentBottomBoxInfo">
                <p className="serviceMemberName">Rithma Randima</p>
                <p className="serviceMemberPosition">Owner</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      ;
    </div>
  );
};

export default ServicesPrices;
