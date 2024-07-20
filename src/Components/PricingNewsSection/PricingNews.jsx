import React from "react";
import "./PricingNews.css";
import img from "../../Assets/New/MealImg.jpg";

const PricingNews = () => {
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
          <div className="newsBottomBox">
            <div className="newsImgContainer">
              <img src={img} alt="" />
            </div>
            <div className="newsBoxTopInfo">
              <p>Admin</p>
              <p>12 May 2024</p>
            </div>
            <div className="newsMiddleInfo">
              <h1 className="newsBoxTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sequi consequuntur in debitis?
              </p>
            </div>
            <div className="newsBottomBtnContainer">
              <button className="newsReadMoreBtn">REad More</button>
            </div>
          </div>
          <div className="newsBottomBox">
            <div className="newsImgContainer">
              <img src={img} alt="" />
            </div>
            <div className="newsBoxTopInfo">
              <p>Admin</p>
              <p>12 May 2024</p>
            </div>
            <div className="newsMiddleInfo">
              <h1 className="newsBoxTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sequi consequuntur in debitis?
              </p>
            </div>
            <div className="newsBottomBtnContainer">
              <button className="newsReadMoreBtn">REad More</button>
            </div>
          </div>

          <div className="newsBottomBox">
            <div className="newsImgContainer">
              <img src={img} alt="" />
            </div>
            <div className="newsBoxTopInfo">
              <p>Admin</p>
              <p>12 May 2024</p>
            </div>
            <div className="newsMiddleInfo">
              <h1 className="newsBoxTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sequi consequuntur in debitis?
              </p>
            </div>
            <div className="newsBottomBtnContainer">
              <button className="newsReadMoreBtn">REad More</button>
            </div>
          </div>

          <div className="newsBottomBox">
            <div className="newsImgContainer">
              <img src={img} alt="" />
            </div>
            <div className="newsBoxTopInfo">
              <p>Admin</p>
              <p>12 May 2024</p>
            </div>
            <div className="newsMiddleInfo">
              <h1 className="newsBoxTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sequi consequuntur in debitis?
              </p>
            </div>
            <div className="newsBottomBtnContainer">
              <button className="newsReadMoreBtn">REad More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingNews;
