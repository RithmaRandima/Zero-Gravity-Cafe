import React from "react";
import "./Events.css";
import EventBox from "../EventBox/EventBox";
import { EventData } from "../../Data/EventData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Events = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="events">
      <div className="eventsContainer">
        <div className="eventTop ">
          <h1>The Future Of Event & Entertainment</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quos
            doloremque, culpa rerum dicta porro consequuntur necessitatibus
            cupiditate, cum distinctio voluptates veritatis! Repellendus fugit
            doloremque earum Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Voluptas,Adipisci, quia. Animi, deleniti error.
          </p>
        </div>
        {/* desktop */}
        <div className="eventBoxContainer hidden md:grid">
          {EventData.map((data) => {
            return (
              <EventBox
                img={data.img}
                title={data.title}
                key={data.id}
                date={data.date}
                description={data.description}
              />
            );
          })}
        </div>
        {/* mobile */}
        <div className="md:hidden block w-[90%] mx-auto h-[100%] my-9">
          <Slider {...settings}>
            {EventData.map((data) => {
              return (
                <EventBox
                  img={data.img}
                  title={data.title}
                  key={data.id}
                  date={data.date}
                  description={data.description}
                />
              );
            })}
          </Slider>
        </div>
        <button className="eventBtn">View More Events</button>
      </div>
    </div>
  );
};

export default Events;
