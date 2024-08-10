import React from "react";
import "./Events.css";
import EventBox from "../EventBox/EventBox";
import { EventData } from "../../Data/EventData";

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
        <button className="eventBtn">View More Events</button>
      </div>
    </div>
  );
};

export default Events;
