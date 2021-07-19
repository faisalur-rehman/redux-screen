import React, { useState } from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";
import GuideInfo from "../../modals/GuideInfo";

const HomeHeader = () => {
  const [guideInfoModal, setGuideInfoModal] = useState(false);

  return (
    <>
      <div className="home-header">
        <Link to="/">
          <div
            className="home-nav-item home-item"
            style={{ color: "blue", verticalAlign: "middle" }}
          >
            <i className="fas fa-home"></i>
            <p>Home</p>
          </div>
        </Link>
        <div
          className="home-nav-item"
          style={{ color: "green", verticalAlign: "middle" }}
        >
          <i className="fas fa-user"></i>
          <p>User</p>
        </div>

        <div
          className="home-nav-item"
          onClick={() => setGuideInfoModal(true)}
          style={{ color: "red", verticalAlign: "middle" }}
        >
          <i className="fas fa-sticky-note"></i>
          <p>Guide</p>
        </div>
        <div
          className="home-nav-item"
          style={{ color: "#FCD702", verticalAlign: "middle" }}
        >
          <i className="fas fa-edit"></i>
          <p>Edit</p>
        </div>
        <div
          className="home-nav-item"
          style={{ color: "orange", verticalAlign: "middle" }}
        >
          <i className="fas fa-save"></i>
          <p>Save</p>
        </div>
        <div
          className="home-nav-item ticket-item"
          style={{ color: "lightblue", verticalAlign: "middle" }}
        >
          <i className="fas fa-clipboard-list"></i>
          <p>Ticket</p>
        </div>
        <div
          className="home-nav-item"
          style={{ color: "gray", verticalAlign: "middle" }}
        >
          <i className="fas fa-info-circle"></i>
          <p>Info</p>
        </div>
      </div>
      <GuideInfo
        show={guideInfoModal}
        onHide={() => setGuideInfoModal(false)}
      />
    </>
  );
};

export default HomeHeader;
