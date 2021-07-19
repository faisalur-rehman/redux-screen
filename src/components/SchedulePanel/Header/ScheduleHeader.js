import React from "react";
import "./ScheduleHeader.css";

const ScheduleHeader = () => {
  return (
    <div className="sticky-header">
      <div className="schedule-header">
        <input type="text" placeholder="Search" />
        <i className="fas fa-plus-circle"></i>
        <i className="fas fa-filter"></i>
      </div>
    </div>
  );
};

export default ScheduleHeader;
