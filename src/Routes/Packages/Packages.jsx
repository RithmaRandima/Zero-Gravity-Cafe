import React from "react";
import "./Packages.css";
import HeroPackages from "../../Components/HeroPackages/HeroPackages";
import Footer from "../../Components/Footer/Footer";
import GamingPrice from "../../Components/GamePriceSection/GamingPrice";
import CinemaPricing from "../../Components/CinemaPricing/CinemaPricing";

const Packages = () => {
  return (
    <div className="packages">
      <HeroPackages />
      <GamingPrice />
      <CinemaPricing />
      <Footer />
    </div>
  );
};

export default Packages;
