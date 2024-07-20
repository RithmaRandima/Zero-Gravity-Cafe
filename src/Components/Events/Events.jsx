import React from "react";
import "./Events.css";
import eventPoster01 from "../../Assets/EventPoster01.jpg";
import eventPoster02 from "../../Assets/EventPoster02.jpg";
import eventPoster03 from "../../Assets/EventPoster03.jpg";
import eventPoster04 from "../../Assets/EventPoster04.jpg";
import EventBox from "../EventBox/EventBox";

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
          <EventBox img={eventPoster01} title="Pool Boys" date="JUL 17 2024" />
          <EventBox img={eventPoster02} title="Take IT" date="JUNE 23 2024" />
          <EventBox img={eventPoster03} title="Mid Night" date="JUNE 31 2024" />
          <EventBox img={eventPoster04} title="Take IT" date="JUNE 23 2024" />
        </div>
        <button className="eventBtn">View More Events</button>
      </div>
    </div>
  );
};

export default Events;
