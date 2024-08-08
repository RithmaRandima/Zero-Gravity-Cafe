import React from "react";
import "./ContactFormSection.css";
import img1 from "../../Assets/EventPoster02.jpg";

const ContactFormSection = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-left">
        <div className="contact-left-img-container">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="contact-form-right">
        <div className="top-text">
          <p className="contact-sub-title">Contact Us</p>
          <p className="contact-title">
            Drop Up A Message <span>.</span>
          </p>
        </div>
        <div className="form-section">
          <div className="contact-input-section">
            <div className="contact-input-container">
              <label>Name *</label>
              <input type="text" />
            </div>
            <div className="contact-input-container">
              <label>Email *</label>
              <input type="" />
            </div>
          </div>
          <div className="contact-input-container">
            <label>Textarea *</label>
            <textarea rows={10}></textarea>
          </div>
          <button className="contact-form-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
