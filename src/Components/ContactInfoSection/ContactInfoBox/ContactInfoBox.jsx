import React from "react";
import "./ContactInfoBox.css";

const ContactInfoBox = (props) => {
  return (
    <div className="contact-info-box">
      <div className="box-icon">{props.icon}</div>
      <p className="box-title">{props.title}</p>
      <p className="box-title-value">{props.titleValue}</p>
    </div>
  );
};

export default ContactInfoBox;
