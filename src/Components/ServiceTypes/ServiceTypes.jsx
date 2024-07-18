import React from "react";
import "./ServiceTypes.css";
import box_img_01 from "../../Assets/ServiceBoxImg1.png";
import box_img_02 from "../../Assets/ServiceBoxImg2.png";
import box_img_03 from "../../Assets/HomeNewsLetterImg.png";
import box_img_04 from "../../Assets/HomeNewsLetterSmall.png";

const ServiceTypes = () => {
  return (
    <div className="serviceType">
      <div className="container">
        <div className="serviceTop">
          <h1>Our Experience</h1>
          <h1>Discover Our Worlds</h1>
        </div>
        <div className="serviceBottom">
          <div className="serviceBox">
            <div className="middleText">
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                repellendus?
              </p>
            </div>
            <img src={box_img_01} alt="" />
            <button className="serviceBoxBookBtn">Book Now</button>
          </div>

          <div className="serviceBox active">
            <div className="middleText">
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                repellendus?
              </p>
            </div>
            <img src={box_img_02} alt="" />
            <button className="serviceBoxBookBtn">Book Now</button>
          </div>

          <div className="serviceBox">
            <div className="middleText">
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                repellendus?
              </p>
            </div>
            <img src={box_img_03} alt="" />
            <button className="serviceBoxBookBtn">Book Now</button>
          </div>

          <div className="serviceBox">
            <div className="middleText">
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                repellendus?
              </p>
            </div>
            <img src={box_img_04} alt="" />
            <button className="serviceBoxBookBtn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypes;
