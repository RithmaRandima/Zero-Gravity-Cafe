import React from "react";
import "./HeroPackages.css";
import { ReactTyped } from "react-typed";

const HeroPackages = () => {
  return (
    <div className="heroPackages">
      <div className="heroText">
        <h2>Meet The</h2>
        <h1>
          <ReactTyped
            strings={[" New Reality"]}
            className="heroContentSpan"
            typeSpeed={490}
            loop
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Ipsa
          aperiam maxime <br /> molestiae amet ullam aliquam maiores sapiente
        </p>
        <button className="priceHeroBtn">Contact Us</button>
      </div>
    </div>
  );
};

export default HeroPackages;
