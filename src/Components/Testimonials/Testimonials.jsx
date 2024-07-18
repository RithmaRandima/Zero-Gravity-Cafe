import React from "react";
import "./Testimonials.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import userImg from "../../Assets/EventPoster01.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testiContainer">
        <div className="testiLeft">
          <h1>What People Say</h1>
          <h1>About Zero Gravity Cafe</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dolorum eligendi provident inventore ipsam quo fugit quae esse quod
            quam veniam amet beatae, consequatur corporis enim veritatis
            exercitationem placeat! Maiores!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            debitis deserunt? Expedita praesentium voluptate error excepturi
            distinctio! Eaque quam dicta beatae autem aut porro cumque incidunt
            inventore? Ratione omnis minus, deleniti est, odio ullam
            reprehenderit beatae vitae nam repellat sed praesentium doloremque
            eligendi ipsa? Officiis iste minima assumenda voluptates earum
            animi. Suscipit eos velit, praesentium nisi est voluptates in vel,
            explicabo odio qui blanditiis optio?
          </p>
        </div>
        <div className="testiRight">
          <BiSolidQuoteAltLeft className="testiQuoteMark" />
          <h1 className="testiQuote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat
            sapiente at ducimus inventore, aperiam non enim cumque error
            suscipit quibusdam soluta! Animi excepturi similique magni quam!
            Qui, itaque aut!
          </h1>

          <div className="testiUserSection">
            <div className="testiUserDetails">
              <div className="testUserImgContainer">
                <img src={userImg} alt="" />
              </div>
              <div>
                <p className="testiUserName">RIthma Randima</p>
                <p className="testiUserPosition">Sales Manager</p>
              </div>
            </div>
            <div className="testiButtonContainer">
              <button className="testiBtn testiBtnLeft">
                <FaArrowLeft className="btnIcon" />
              </button>
              <button className="testiBtn testiBtnRight">
                <FaArrowRight className="btnIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
