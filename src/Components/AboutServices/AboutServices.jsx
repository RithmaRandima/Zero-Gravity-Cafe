import React from "react";
import "./AboutServices.css";
import img from "../../Assets/EventPoster02.jpg";
import { ReactTyped } from "react-typed";

const AboutServices = () => {
  return (
    <div className="aboutServices">
      <div className="aboutServicesContainer">
        <div className="aboutServiceTop">
          <h1>
            <ReactTyped
              strings={[" Our Services"]}
              className="aboutContentSpan"
              typeSpeed={600}
              loop
            />
          </h1>
          <p>
            Lorem dolor, sit amet consectetur adipisicing elit. Magnam aliquid
            autem pariatur aspernatur cumque dignissimos quas molestiae, ea
            explicabo!
          </p>
        </div>
        <div className="aboutServiceBottom">
          <div className="aboutServiceBox">
            <div className="serviceBoxImg">
              <img src={img} alt="" />
            </div>
            <div className="serviceBoxInfo">
              <h1 className="serviceBoxTitle">Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                neque at nemo!
              </p>
            </div>
          </div>

          <div className="aboutServiceBox">
            <div className="serviceBoxImg">
              <img src={img} alt="" />
            </div>
            <div className="serviceBoxInfo">
              <h1 className="serviceBoxTitle">Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                neque at nemo!
              </p>
            </div>
          </div>

          <div className="aboutServiceBox">
            <div className="serviceBoxImg">
              <img src={img} alt="" />
            </div>
            <div className="serviceBoxInfo">
              <h1 className="serviceBoxTitle">Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                neque at nemo!
              </p>
            </div>
          </div>

          <div className="aboutServiceBox">
            <div className="serviceBoxImg">
              <img src={img} alt="" />
            </div>
            <div className="serviceBoxInfo">
              <h1 className="serviceBoxTitle">Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                neque at nemo!
              </p>
            </div>
          </div>

          <div className="aboutServiceBox">
            <div className="serviceBoxImg">
              <img src={img} alt="" />
            </div>
            <div className="serviceBoxInfo">
              <h1 className="serviceBoxTitle">Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                neque at nemo!
              </p>
            </div>
          </div>

          <div className="aboutServiceBox">
            <div className="serviceBoxImg">
              <img src={img} alt="" />
            </div>
            <div className="serviceBoxInfo">
              <h1 className="serviceBoxTitle">Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                neque at nemo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
