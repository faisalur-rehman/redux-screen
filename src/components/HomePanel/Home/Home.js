import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <div className="home-panel">
        <h1>Home Panel</h1>
      </div>
      <div className="map-panel">
        <h1>Map Panel</h1>
      </div>
    </div>
  );
};

export default Home;
