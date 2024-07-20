import React from "react";
import "./MealSection.css";
import meal_img from "../../Assets/New/MealImg.jpg";
import { FaChevronDown } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const MealSection = () => {
  return (
    <div className="mealSection">
      <div className="mealContainer">
        <div className="meal-top">
          <div className="mealTopLeft">
            <div className="mealTopImgContainer">
              <img src={meal_img} alt="" />
            </div>
          </div>
          <div className="mealTopRight">
            <h1>Zero Gravity Cafe</h1>
            <ReactTyped
              strings={["Smoothie Shop "]}
              className="mealTopRightHeadingTwo"
              typeSpeed={490}
              loop
            />
            <div className="mealTopRightInfo">
              <p>Special Request?</p>
              <p>Just Ask! Drinks Will be</p>
              <p>
                <span>"Custom Made" to your request</span>
              </p>
            </div>{" "}
          </div>
        </div>

        <div className="meal-box">
          <div className="meal-box-content">
            <div>
              <p className="meal-heading">Cold Drinks</p>
              <p className="meal-info">
                <span style={{ fontWeight: "600", marginRight: "10px" }}>
                  Drink Flavors:
                </span>
                Almond &#183; Caramel &#183; Chocolate &#183; Cinnamon &#183;
                Vanilla
              </p>
            </div>
            <div>
              <FaChevronDown className="mealDownArrow" />
            </div>
          </div>

          <div className="meal-box-content box-content-2">
            <p>Add your favorite flavor:0.59</p>
            <p>Extra Shot of Espresso: 0.80</p>
            <p>Soy Milk: 0.25</p>
          </div>

          <div className="meal-box-content box-content-3">
            <p>
              <b>Iced-Blended Mocha</b>
            </p>
            <p>
              Espresso, Gourmet, Chocolate & milk blended with ice & topped with
              whipped cream
            </p>

            <br />
            <p>
              <b>Fruit Smoothie</b>
            </p>
            <p>Banana, Mango, Pina Colado, Strawberry</p>
          </div>
        </div>

        <div className="meal-box">
          <div className="meal-box-content">
            <div>
              <p className="meal-heading">Cold Drinks</p>
              <p className="meal-info">
                <span style={{ fontWeight: "600", marginRight: "10px" }}>
                  Drink Flavors:
                </span>
                Almond &#183; Caramel &#183; Chocolate &#183; Cinnamon &#183;
                Vanilla
              </p>
            </div>
            <div>
              <FaChevronDown className="mealDownArrow" />
            </div>
          </div>

          <div className="meal-box-content box-content-2">
            <p>Add your favorite flavor:0.59</p>
            <p>Extra Shot of Espresso: 0.80</p>
            <p>Soy Milk: 0.25</p>
          </div>

          <div className="meal-box-content box-content-3">
            <p>
              <b>Iced-Blended Mocha</b>
            </p>
            <p>
              Espresso, Gourmet, Chocolate & milk blended with ice & topped with
              whipped cream
            </p>

            <br />
            <p>
              <b>Fruit Smoothie</b>
            </p>
            <p>Banana, Mango, Pina Colado, Strawberry</p>
          </div>
        </div>

        <button className="cafeBtn">Zero Gravity Smoothie Shop</button>
      </div>
    </div>
  );
};

export default MealSection;
