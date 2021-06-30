import React from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <div
        className="home-nav-item"
        style={{ color: "blue", verticalAlign: "middle" }}
      >
        <i class="fas fa-home"></i>
        <p>Home</p>
      </div>
      <div
        className="home-nav-item"
        style={{ color: "green", verticalAlign: "middle" }}
      >
        <i class="fas fa-user"></i>
        <p>User</p>
      </div>
      <div
        className="home-nav-item"
        style={{ color: "red", verticalAlign: "middle" }}
      >
        <i class="fas fa-sticky-note"></i>
        <p>Guide</p>
      </div>
      <div
        className="home-nav-item"
        style={{ color: "#FCD702", verticalAlign: "middle" }}
      >
        <i class="fas fa-edit"></i>
        <p>Edit</p>
      </div>
      <div
        className="home-nav-item"
        style={{ color: "orange", verticalAlign: "middle" }}
      >
        <i class="fas fa-save"></i>
        <p>Save</p>
      </div>
      <div
        className="home-nav-item"
        style={{ color: "lightblue", verticalAlign: "middle" }}
      >
        <i class="fas fa-clipboard-list"></i>
        <p>Ticket</p>
      </div>
      <div
        className="home-nav-item"
        style={{ color: "gray", verticalAlign: "middle" }}
      >
        <i class="fas fa-info-circle"></i>
        <p>Info</p>
      </div>
    </div>
  );
};

export default HomeHeader;
