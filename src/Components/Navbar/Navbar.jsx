import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navActive, setNavActive] = useState("home");

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  console.log(navActive);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Zero Gravity</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => setNavActive("home")}>
          <Link
            to="/"
            style={{ color: navActive === "home" ? "blue" : "white" }}
          >
            Home
          </Link>
        </li>
        <li onClick={() => setNavActive("about")}>
          <Link
            to="/about"
            style={{ color: navActive === "about" ? "blue" : "white" }}
          >
            About
          </Link>
        </li>
        <li onClick={() => setNavActive("pricing")}>
          <Link
            to="/pricing"
            style={{ color: navActive === "pricing" ? "blue" : "white" }}
          >
            Pricing
          </Link>
        </li>
        <li onClick={() => setNavActive("training")}>
          <Link
            to="/training"
            style={{ color: navActive === "training" ? "blue" : "white" }}
          >
            Training
          </Link>
        </li>
        <li onClick={() => setNavActive("contact")}>
          <Link
            to="/contact"
            style={{ color: navActive === "contact" ? "blue" : "white" }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
