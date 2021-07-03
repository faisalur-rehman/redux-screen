import React from "react";
import "../HomeHeader/HomeHeader.css";

const HomeFooter = () => {
  return (
    <div className="home-header home-footer">
      <div
        className="home-nav-item"
        style={{ color: "blue", verticalAlign: "middle" }}
      >
        <i className="fas fa-home"></i>
        <p>Home</p>
      </div>
      <div
        className="home-nav-item"
        style={{ color: "green", verticalAlign: "middle" }}
      >
        <i className="fas fa-user"></i>
        <p>User</p>
      </div>

      <div
        className="home-nav-item"
        style={{ color: "#FCD702", verticalAlign: "middle" }}
      >
        <i className="fas fa-edit"></i>
        <p>Places</p>
      </div>
      <div
        className="home-nav-item "
        style={{ color: "lightblue", verticalAlign: "middle" }}
      >
        <i className="fas fa-clipboard-list"></i>
        <p>Ticket</p>
      </div>
    </div>
  );
};

export default HomeFooter;
