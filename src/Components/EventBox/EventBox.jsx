import React from "react";
import "./EventBox.css";

const EventBox = (props) => {
  return (
    <div className="eventBox">
      <div className="eventImgContainer">
        <img src={props.img} alt="" />
      </div>
      <div className="eventInfo">
        <p className="eventTitle">{props.title}</p>
        <p className="eventDate">{props.date}</p>
        <p className="eventDetail">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quia
          rerum ex odio?
        </p>
      </div>
    </div>
  );
};

export default EventBox;
