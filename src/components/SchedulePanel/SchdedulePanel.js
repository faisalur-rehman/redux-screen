import React, { useState } from "react";
import "./SchedulePanel.css";
import ScheduleHeader from "./Header/ScheduleHeader";
import EventModal from "../modals/EventModal";
let arr = [
  {
    date: "Saturday, December 5, 2021",
    schedules: [1, 2],
  },
  { date: "Sunday, December 6, 2021", schedules: [1, 2] },
  { date: "Monday, December 7, 2021", schedules: [1, 2] },
  { date: "Tuesday, December 8, 2021", schedules: [1, 2] },
];

const SchdedulePanel = (props) => {
  const [eventModal, setEventModal] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // width: "20%",
          maxHeight: "100vh",
          overflowY: "scroll",
        }}
      >
        <ScheduleHeader />
        <div className="all-schedules">
          {arr.map((_schedule, i) => (
            <div key={i}>
              <p className="schedule-date">{_schedule.date}</p>
              {_schedule.schedules.map((_) => (
                <div
                  className="schedule-card"
                  onClick={() => setEventModal(true)}
                >
                  <div className="calendar-icon">
                    <i className="far fa-calendar-alt"></i>
                  </div>
                  <div className="schedule">
                    <p>10:00-12:00</p>
                    <p>Giattos Compinelle</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <EventModal show={eventModal} onHide={() => setEventModal(false)} />
    </>
  );
};

export default SchdedulePanel;
