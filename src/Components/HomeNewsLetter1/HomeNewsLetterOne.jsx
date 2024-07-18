import React from "react";
import "./HomeNewsLetterOne.css";
import image_01 from "../../Assets/HomeNewsLetterImg.png";
import image_02 from "../../Assets/HomeNewsLetterSmall.png";

const HomeNewsLetterOne = () => {
  return (
    <div className="newsLetterOne">
      <div className="container">
        <div className="left">
          <h1>You Can't Experience This Anywhere Else</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quisquam sint ab libero.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            accusamus libero illo rerum explicabo quas maxime ut delectus sint
            eveniet? Doloremque temporibus obcaecati vel mollitia?
          </p>

          <button className="learnMore">learn more</button>
        </div>
        <div className="right">
          <img src={image_01} alt="" className="big-image" />
          <div className="img-container-2">
            <img src={image_02} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetterOne;
