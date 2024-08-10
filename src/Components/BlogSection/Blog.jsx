import React from "react";
import "./Blog.css";
import img1 from "../../Assets/service-1.jpg";
import img2 from "../../Assets/service-2.jpg";
import img3 from "../../Assets/service-3.jpg";

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
              <img src={img1} alt="" />
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
              <img src={img2} alt="" />
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
              <img src={img3} alt="" />
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
