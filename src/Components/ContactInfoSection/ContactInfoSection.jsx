import React from "react";
import "./ContactInfoSection.css";
import ContactInfoBox from "./ContactInfoBox/ContactInfoBox";
import { FaMapLocation } from "react-icons/fa6";
import { FaMailBulk, FaPhoneVolume } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <div className="contact-info-container">
      <ContactInfoBox
        icon={<FaMapLocation />}
        title={"Our Location"}
        titleValue={"Jl. Nusa Dua, Kuta - Bali 80361"}
      />

      <ContactInfoBox
        icon={<FaPhoneVolume />}
        title={"Phone Number"}
        titleValue={"+123 4345 2346"}
      />

      <ContactInfoBox
        icon={<FaMailBulk />}
        title={"Partnership"}
        titleValue={"partnership@domain.com"}
      />
    </div>
  );
};

export default ContactInfoSection;
