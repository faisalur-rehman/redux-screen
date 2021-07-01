import React from "react";
import "./PlacesHeader.css";
const PlacesHeader = () => {
  return (
    <div className="places-header">
      <i className="fas fa-search"></i>
      <i className="fas fa-plus-circle"></i>
      <i className="fas fa-filter"></i>
      <i className="fas fa-tasks"></i>
    </div>
  );
};

export default PlacesHeader;