import React from "react";
import "./Staff.css";
import { Parallax } from "react-parallax";
import img1 from "../../Assets/New/pexels-tima-miroshnichenko-6498312.jpg";
import StaffMemberBox from "../StaffMemberBox/StaffMemberBox";

const Staff = () => {
  return (
    <div className="staffSection">
      <Parallax
        className="staffSectionBackground"
        bgImage={img1}
        strength={300}
      >
        <div className="staffContainer">
          <div className="staffContentTop">
            <div className="contentInfo">
              <h1>Our Staff</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vitae deserunt delectus autem excepturi, quod ex voluptatum
                repellendus aliquid nemo quam, eius asperiores veniam suscipit
                inventore sequi unde eos sint sapiente
              </p>
              <button className="staffContactBtn">Contact US</button>
            </div>
          </div>
          <div className="staffContentBottom">
            <StaffMemberBox img={img1} name="Rithma Randima" position="Owner" />
            <StaffMemberBox img={img1} name="Rithma Randima" position="Owner" />
            <StaffMemberBox img={img1} name="Rithma Randima" position="Owner" />
            <StaffMemberBox img={img1} name="Rithma Randima" position="Owner" />
          </div>
        </div>
      </Parallax>
      ;
    </div>
  );
};

export default Staff;
