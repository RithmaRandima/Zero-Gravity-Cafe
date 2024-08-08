import React from "react";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import ContactStaff from "../../Components/ContactStaff/ContactStaff";
import HeroContact from "../../Components/HeroContact/HeroContact";
import ContactFormSection from "../../Components/ContactFormSection/ContactFormSection";
import ContactInfoSection from "../../Components/ContactInfoSection/ContactInfoSection";
import ContactNewsletter from "../../Components/ContactNewsletter/ContactNewsletter";

const Contact = () => {
  return (
    <div>
      <HeroContact />
      <ContactFormSection />
      <ContactInfoSection />
      <ContactNewsletter />
      <ContactStaff />
      <Footer />
    </div>
  );
};

export default Contact;
