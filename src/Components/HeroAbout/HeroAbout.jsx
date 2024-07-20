import React from "react";
import about__video from "../../Assets/New/AboutHero.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeroAbout.css";
import { ReactTyped } from "react-typed";

const HeroAbout = () => {
  return (
    <div className="heroAbout">
      <video autoPlay loop muted id="aboutVideo">
        <source src={about__video} type="video/mp4" />
      </video>
      <div className="AboutContent">
        <h1>
          One Step Ahead with <br />
          <span>
            <ReactTyped
              strings={[" Augmented Reality"]}
              className="aboutContentSpan"
              typeSpeed={490}
              loop
            />
          </span>
        </h1>
        <p>
          The Best VR Experience On The Planet is Right Here in Your
          Neighborhood. What Will happen When <br /> You Step In to ZeroGravity
          Cafe Together With Friends?
        </p>

        <div className="btnContainer">
          <Link to="/contact" className="btn aboutLaunchBtn">
            <FaPlayCircle className="playIcon" /> Explore Now
          </Link>
        </div>
      </div>
      <div className="AboutVerticalLine"></div>
      <div className="AboutHorizontalLine"></div>
    </div>
  );
};

export default HeroAbout;
