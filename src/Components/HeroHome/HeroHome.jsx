import React from "react";
import { Link } from "react-router-dom";
import "./HeroHome.css";
import space_video from "../../Assets/216035.mp4";
import { FaPlayCircle } from "react-icons/fa";

const HeroHome = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={space_video} type="video/mp4" />
      </video>
      <div className="content">
        <h1>
          Immersive <br /> Experience That <br />
          Feel Like{" "}
          <span style={{ color: "blue", fontWeight: "700" }}> The Future</span>
        </h1>
        <p>
          The Best VR Experience On The Planet is Right Here in Your
          Neighborhood. What <br /> Will happen When You Step In to ZeroGravity
          Cafe Together With Friends?
        </p>

        <div className="btnContainer">
          <Link to="/training" className="btn bookNowBtn">
            Book Now
          </Link>
          <Link to="/contact" className="btn launchBtn">
            <FaPlayCircle className="playIcon" /> Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
