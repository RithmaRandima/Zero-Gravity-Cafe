import React from "react";
import "./About.css";
import img1 from "../../Assets/priceGaming-2.jpg";
import img2 from "../../Assets/Pacakeg-Background.jpg";
import img3 from "../../Assets/priceMovie-1.webp";
import img4 from "../../Assets/contact-form-img.jpg";

const About = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUsContainer">
        <div className="aboutUsLeft">
          <div className="side-box"></div>
          <div className="aboutLeftText">
            <h1>Awesome</h1>
            <h1>Experience</h1>
            <h1>with Virtual </h1>
            <h1>Reality World</h1>
          </div>

          <div className="aboutLeftImages">
            <div className="leftImageBox">
              <img src={img1} alt="" />
            </div>
            <div className="leftImageBox">
              <img src={img2} alt="" />
            </div>
            <div className="leftImageBox">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="aboutUsRight">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            minus veniam rerum officia sequi incidunt dolor. Neque voluptate
            pariatur molestias, similique aliquid hic corrupti optio cupiditate
            nisi modi delectus blanditiis consectetur. Odio, saepe eaque? Cumque
            et quia aliquid in quibusdam, voluptatum cum maiores, aliquam
            temporibus sunt facilis eatque.
          </p>
          <div className="aboutRightImgContainer">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
