import React from "react";
import "./ContactStaffMemberBox.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  PiPaypalLogo,
  PiPaypalLogoBold,
  PiPaypalLogoFill,
} from "react-icons/pi";

const ContactStaffMemberBox = (props) => {
  return (
    <div className="contactStaffContentBottomBox">
      <img src={props.img} alt="" />
      <div className="contactStaffContentBottomBoxInfo">
        <p className="contactStaffMemberName">{props.name}</p>
        <p className="contactStaffMemberPosition">{props.position}</p>
        <div className="contactSocialItemContainer">
          <FaFacebookF className="contactSocialIcon" />
          <FaLinkedinIn className="contactSocialIcon" />
          <FaTwitter className="contactSocialIcon" />
          <FaInstagram className="contactSocialIcon" />
          <FaWhatsapp className="contactSocialIcon" />
        </div>
      </div>
    </div>
  );
};

export default ContactStaffMemberBox;
