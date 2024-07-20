import React from "react";
import "./Blog.css";
import img from "../../Assets/New/MealImg.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blogContainer">
        <div className="blogTopSection">
          <h1>Our Latest Blog</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vero
            quidem debitis ipsam.
          </p>
        </div>
        <div className="blogBottomSection">
          <div className="blogBottomBox">
            <div className="blogImgContainer">
              <img src={img} alt="" />
            </div>
            <div className="blogBoxTopInfo">
              <p>Admin</p>
              <p>12 May 2024</p>
            </div>
            <div className="blogMiddleInfo">
              <h1 className="boxBoxTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sequi consequuntur in debitis?
              </p>
            </div>
            <div className="blogBottomBtnContainer">
              <button className="blogReadMoreBtn">REad More</button>
            </div>
          </div>

          <div className="blogBottomBox">
            <div className="blogImgContainer">
              <img src={img} alt="" />
            </div>
            <div className="blogBoxTopInfo">
              <p>Admin</p>
              <p>12 May 2024</p>
            </div>
            <div className="blogMiddleInfo">
              <h1 className="boxBoxTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sequi consequuntur in debitis?
              </p>
            </div>
            <div className="blogBottomBtnContainer">
              <button className="blogReadMoreBtn">REad More</button>
            </div>
          </div>

          <div className="blogBottomBox">
            <div className="blogImgContainer">
              <img src={img} alt="" />
            </div>
            <div className="blogBoxTopInfo">
              <p>Admin</p>
              <p>12 May 2024</p>
            </div>
            <div className="blogMiddleInfo">
              <h1 className="boxBoxTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                architecto sequi consequuntur in debitis?
              </p>
            </div>
            <div className="blogBottomBtnContainer">
              <button className="blogReadMoreBtn">REad More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
