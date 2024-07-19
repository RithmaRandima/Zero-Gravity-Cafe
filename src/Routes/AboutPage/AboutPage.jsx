import React from "react";
import "./AboutPage.css";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";

const AboutPage = () => {
  return (
    <div className="about">
      <HeroAbout />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
