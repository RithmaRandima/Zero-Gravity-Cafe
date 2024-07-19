import React from "react";
import "./Events.css";
import eventPoster01 from "../../Assets/EventPoster01.jpg";
import eventPoster02 from "../../Assets/EventPoster03.jpg";
import eventPoster03 from "../../Assets/EventPoster02.jpg";

const Events = () => {
  return (
    <div className="events">
      <div className="eventsContainer">
        <div className="eventTop">
          <h1>The Future Of Event & Entertainment</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quos
            doloremque, culpa rerum dicta porro consequuntur necessitatibus
            cupiditate, cum distinctio voluptates veritatis! Repellendus fugit
            doloremque earum Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Voluptas,Adipisci, quia. Animi, deleniti error.
          </p>
        </div>
        <div className="eventBoxContainer">
          <div className="eventBox">
            <div className="eventImgContainer">
              <img src={eventPoster01} alt="" />
            </div>
            <div className="eventInfo">
              <p className="eventTitle">Take IT</p>
              <p className="eventDate">JUNE 23 2024</p>
              <p className="eventDetail">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quia rerum ex odio?
              </p>
            </div>
          </div>
          <div className="eventBox">
            <div className="eventImgContainer">
              <img src={eventPoster02} alt="" />
            </div>
            <div className="eventInfo">
              <p className="eventTitle">Pool Boys</p>
              <p className="eventDate">JUL 17 2024</p>
              <p className="eventDetail">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quia rerum ex odio?
              </p>
            </div>
          </div>
          <div className="eventBox">
            <div className="eventImgContainer">
              <img src={eventPoster03} alt="" />
            </div>
            <div className="eventInfo">
              <p className="eventTitle">Mid Night Music</p>
              <p className="eventDate">JUNE 31 2024</p>
              <p className="eventDetail">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quia rerum ex odio?
              </p>
            </div>
          </div>
        </div>
        <button className="eventBtn">View More Events</button>
      </div>
    </div>
  );
};

export default Events;
