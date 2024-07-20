import React from "react";
import "./Packages.css";
import HeroPackages from "../../Components/HeroPackages/HeroPackages";
import Footer from "../../Components/Footer/Footer";
import GamingPrice from "../../Components/GamePriceSection/GamingPrice";
import CinemaPricing from "../../Components/CinemaPricing/CinemaPricing";
import PricingVideoSection from "../../Components/PricingVideoSection/PricingVideoSection";
import PricingNews from "../../Components/PricingNewsSection/PricingNews";
import Staff from "../../Components/Staff/Staff";
import ServicesPrices from "../../Components/ServicesPricesSection/ServicesPrices";

const Packages = () => {
  return (
    <div className="packages">
      <HeroPackages />
      <GamingPrice />
      <CinemaPricing />
      <PricingVideoSection />
      <PricingNews />
      <ServicesPrices />
      <Footer />
    </div>
  );
};

export default Packages;
