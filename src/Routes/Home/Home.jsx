import React from "react";
import "./Home.css";
import HeroHome from "../../Components/HeroHome/HeroHome";
import Footer from "../../Components/Footer/Footer";
import HomeNewsLetterOne from "../../Components/HomeNewsLetter1/HomeNewsLetterOne";
import Experience from "../../Components/Experience/Experience";
import ServiceTypes from "../../Components/ServiceTypes/ServiceTypes";
import Events from "../../Components/Events/Events";
import Testimonials from "../../Components/Testimonials/Testimonials";
import MealSection from "../../Components/MealSection/MealSection";

const Home = () => {
  return (
    <div className="home">
      <HeroHome />
      <HomeNewsLetterOne />
      <Experience />
      <ServiceTypes />
      <MealSection />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
