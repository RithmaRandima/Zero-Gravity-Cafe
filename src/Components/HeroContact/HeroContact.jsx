import React from "react";
import about__video from "../../Assets/Contact_Hero.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeroContact.css";
import { ReactTyped } from "react-typed";
import { IoIosContacts } from "react-icons/io";

const HeroContact = () => {
  return (
    <div className="heroContact">
      <video autoPlay loop muted id="contactVideo">
        <source src={about__video} type="video/mp4" />
      </video>
      <div className="contactContent">
        <h1>
          Feel Free To <br />
          <span>
            <ReactTyped
              strings={[" Contact Us"]}
              className="contactContentSpan"
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
            <IoIosContacts className="playIcon" /> Contact Us
          </Link>
        </div>
      </div>
      <div className="AboutVerticalLine"></div>
      <div className="AboutHorizontalLine"></div>
    </div>
  );
};

export default HeroContact;
