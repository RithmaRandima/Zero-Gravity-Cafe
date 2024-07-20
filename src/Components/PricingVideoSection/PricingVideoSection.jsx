import React from "react";
import "./PricingVideoSection.css";
import pricing_video from "../../Assets/New/PricingVideo.mp4";

const PricingVideoSection = () => {
  return (
    <div className="pricingVideo">
      <video autoPlay loop muted id="pricingVideo">
        <source src={pricing_video} type="video/mp4" />
      </video>
      <div className="pricingVideoContent">
        <h1>
          Live Your{" "}
          <span style={{ color: " rgb(0, 247, 255)", fontWeight: "700" }}>
            Life{" "}
          </span>{" "}
          In Your <br />
          <span style={{ color: " rgb(0, 247, 255)", fontWeight: "700" }}>
            {" "}
            Own World
          </span>
        </h1>
        <p>
          The Best VR Experience On The Planet is Right Here in Your
          Neighborhood. What <br /> Will happen When You Step In to ZeroGravity
          Cafe Together With Friends?
        </p>
      </div>
    </div>
  );
};

export default PricingVideoSection;
