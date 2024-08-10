import React from "react";
import "./PricingNews.css";
import { pricingNewsData } from "../../Data/PricingNewsData";
import PricingNewsBox from "./PricingNewsBox/PricingNewsBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PricingNews = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="news">
      <div className="newsContainer">
        <div className="newsTopSection">
          <h1>Our Latest News</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vero
            quidem debitis ipsam.
          </p>
        </div>
        <div className="newsBottomSection">
          <Slider {...settings}>
            {pricingNewsData.map((data) => (
              <PricingNewsBox
                key={data.id}
                img={data.img}
                title={data.title}
                author={data.author}
                date={data.date}
                description={data.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PricingNews;
