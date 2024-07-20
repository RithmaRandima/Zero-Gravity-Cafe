import React from "react";
import "./StaffMemberBox.css";

const StaffMemberBox = (props) => {
  return (
    <div className="staffContentBottomBox">
      <img src={props.img} alt="" />
      <div className="staffContentBottomBoxInfo">
        <p className="staffMemberName">{props.name}</p>
        <p className="staffMemberPosition">{props.position}</p>
      </div>
    </div>
  );
};

export default StaffMemberBox;
