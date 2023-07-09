import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/BannerImage.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <p className="heading">Kream</p>
      <p className="subheading">Royal Experience of Taste</p>
      <button className="order-button">Order</button>
    </div>
  );
}

export default Home;
