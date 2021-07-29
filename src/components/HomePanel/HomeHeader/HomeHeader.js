import React, { useState } from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";
import GuideInfo from "../../modals/GuideInfo";
import logo from "../../../assets/images/logo1.jpg";

const HomeHeader = () => {
  const [guideInfoModal, setGuideInfoModal] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          className="side-none"
          src={logo}
          alt=""
          height="65px"
          width="65px"
          style={{ borderRadius: "50%", marginRight: 10 }}
        />
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
        </div>
        <h4 className="side-none" style={{ color: "orange", marginLeft: 5 }}>
          Andiamo
        </h4>
      </div>
      <GuideInfo
        show={guideInfoModal}
        onHide={() => setGuideInfoModal(false)}
      />
    </>
  );
};

export default HomeHeader;
