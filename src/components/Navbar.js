import React from "react";
import Logo from "../assets/2588301.png";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo" />
      </div>
      <div className="rightSide">
        <Link
          className={`${
            location.pathname === "/login"
              ? "navbar-bottom-line"
              : "navbar-link"
          }`}
          to="/login"
        >
          Login
        </Link>
        <Link
          className={`${
            location.pathname === "/" ? "navbar-bottom-line" : "navbar-link"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${
            location.pathname === "/menu" ? "navbar-bottom-line" : "navbar-link"
          }`}
          to="/menu"
        >
          Menu
        </Link>
        <Link
          className={`${
            location.pathname === "/about"
              ? "navbar-bottom-line"
              : "navbar-link"
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`${
            location.pathname === "/contact"
              ? "navbar-bottom-line"
              : "navbar-link"
          }`}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
