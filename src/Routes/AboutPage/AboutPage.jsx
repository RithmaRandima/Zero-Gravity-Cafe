import React from "react";
import "./AboutPage.css";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";
import Staff from "../../Components/Staff/Staff";
import Blog from "../../Components/BlogSection/Blog";
import AboutServices from "../../Components/AboutServices/AboutServices";
import NewsLetter from "../../Components/HomeNewsLetter1/HomeNewsLetterOne";

const AboutPage = () => {
  return (
    <div className="about">
      <HeroAbout />
      <About />
      <AboutServices />
      <Blog />
      <NewsLetter />
      <Staff />
      <Footer />
    </div>
  );
};

export default AboutPage;
